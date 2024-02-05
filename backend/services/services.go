package services

import (
	"context"
	"encoding/json"
	"fmt"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
	"github.com/go-redis/redis/v8"
	"github.com/lingesh-sk/qr_scanner_application/models"
	"github.com/neo4j/neo4j-go-driver/v5/neo4j"
)

var RedisClient *redis.Client

func GetProductByID(c *gin.Context, redisClient *redis.Client, driver neo4j.Driver) {
	id, _ := strconv.Atoi(c.Param("id"))
	fmt.Println(id)

	key := "product:" + strconv.Itoa(id)

	val, err := redisClient.Get(context.TODO(), key).Result()
	if err == nil {
		var products []models.Product
		if err := json.Unmarshal([]byte(val), &products); err == nil {
			
			c.JSON(http.StatusOK, products)
			return

		}
	}

	session := driver.NewSession(neo4j.SessionConfig{})
	defer session.Close()

	result, err := session.Run("MATCH (N:Product) WHERE N.ProductID =$id RETURN (N)", map[string]interface{}{"id": id})
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": fmt.Sprintf("Failed to execute query: %s", err.Error())})
		return
	}

	var todos []models.Product

	for result.Next() {
		record := result.Record()
		nodeValue := record.Values[0]

		todoNode, ok := nodeValue.(neo4j.Node)

		if !ok {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to retrieve Todo node"})
			return
		}

		props := todoNode.Props

		todo := models.Product{
			ProductID:         id,
			Name:              props["Name"].(string),
			GHGFootprint:      props["GHGFootprint"].(string),
			IGHGFootprint:     props["IGHGFootprint"].(string),
			PGHGFooting:       props["PGHGFooting"].(string),
			RecycledPlas:      props["RecycledPlas"].(string),
			RecycledCardboard: props["recycledCardboard"].(string),
			SSM:               props["SSM"].(string),
			Palmoil:           props["Palmoil"].(string),
			PFAS:              props["PFAS"].(string),
			Parabens:          props["Parabens"].(string),
			Phalates:          props["Phalates"].(string),
			Country:           props["Country"].(string),
			REU:               props["REU"].(string),
			UWS:               props["UWS"].(string),
			WtL:               props["WtL"].(string),
			FCF:               props["FCF"].(string),
			TextGHGFootprint:  props["TextGHGFootprint"].(string),
			TextIGHGFootprint: props["TextIGHGFootprint"].(string),
			TextPGHGFooting:   props["TextPGHGFooting"].(string),
			TextRecycledPlas:  props["TextRecycledPlas"].(string),
		}
		fmt.Print(todo)
		todos = append(todos, todo)
	}

	if len(todos) == 0 {
		c.JSON(http.StatusNotFound, gin.H{"error": "No Product data found"})
		return
	}

	productJSON, _ := json.Marshal(todos)
	redisClient.Set(context.TODO(), key, productJSON, 0)

	c.JSON(http.StatusOK, todos[0])
}

func CreateProduct(c *gin.Context, redisClient *redis.Client, driver neo4j.Driver) {
	var newProduct models.Product

	if err := c.ShouldBindJSON(&newProduct); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": fmt.Sprintf("Failed to bind JSON: %s", err.Error())})
		return
	}

	session := driver.NewSession(neo4j.SessionConfig{})
	defer session.Close()
	exists, err := productExists(newProduct.ProductID, session)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": fmt.Sprintf("Failed to check product existence: %s", err.Error())})
		return
	}

	if exists {
		c.JSON(http.StatusConflict, gin.H{"error": "Product with the same ProductID already exists"})
		return
	}
	query := `
	MATCH (m:Manufacturer)
CREATE (N:Product {
  ProductID: $ProductID,
  Name: $Name,
  GHGFootprint: $GHGFootprint,
  IGHGFootprint: $IGHGFootprint,
  PGHGFooting: $PGHGFooting,
  RecycledPlas: $RecycledPlas,
  recycledCardboard: $RecycledCardboard,
  SSM: $SSM,
  Palmoil: $Palmoil,
  PFAS: $PFAS,
  Parabens: $Parabens,
  Phalates: $Phalates,
  Country: $Country,
  REU: $REU,
  UWS: $UWS,
  WtL: $WtL,
  FCF: $FCF,
  TextGHGFootprint: $TextGHGFootprint,
  TextIGHGFootprint: $TextIGHGFootprint,
  TextPGHGFooting: $TextPGHGFooting,
  TextRecycledPlas: $TextRecycledPlas
})
CREATE (m)-[:MANUFACTURES]->(N)
RETURN m, N;
	`

	_, errs := session.Run(query, map[string]interface{}{
		"ProductID":         newProduct.ProductID,
		"Name":              newProduct.Name,
		"GHGFootprint":      newProduct.GHGFootprint,
		"IGHGFootprint":     newProduct.IGHGFootprint,
		"PGHGFooting":       newProduct.PGHGFooting,
		"RecycledPlas":      newProduct.RecycledPlas,
		"RecycledCardboard": newProduct.RecycledCardboard,
		"SSM":               newProduct.SSM,
		"Palmoil":           newProduct.Palmoil,
		"PFAS":              newProduct.PFAS,
		"Parabens":          newProduct.Parabens,
		"Phalates":          newProduct.Phalates,
		"Country":           newProduct.Country,
		"REU":               newProduct.REU,
		"UWS":               newProduct.UWS,
		"WtL":               newProduct.WtL,
		"FCF":               newProduct.FCF,
		"TextGHGFootprint":  newProduct.TextGHGFootprint,
		"TextIGHGFootprint": newProduct.TextIGHGFootprint,
		"TextPGHGFooting":   newProduct.TextPGHGFooting,
		"TextRecycledPlas":  newProduct.TextRecycledPlas,
	})
	if errs != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": fmt.Sprintf("Failed to execute query: %s", err.Error())})
		return
	}
	
	key := "product:" + strconv.Itoa(newProduct.ProductID)
	fmt.Println(key)
	productJSON, _ := json.Marshal(newProduct)
	redisClient.Set(context.TODO(), key, productJSON, 0)
	c.JSON(http.StatusCreated, newProduct)
}

func productExists(productID int, session neo4j.Session) (bool, error) {
	query := `
        MATCH (p:Product {ProductID: $ProductID})
        RETURN COUNT(p) > 0 AS exists
    `

	result, err := session.Run(query, map[string]interface{}{
		"ProductID": productID,
	})
	if err != nil {
		return false, err
	}

	if result.Next() {
		existsValue, ok := result.Record().Get("exists")
		if !ok {
			return false, fmt.Errorf("failed to get 'exists' value from result")
		}

		exists, ok := existsValue.(bool)
		if !ok {
			return false, fmt.Errorf("failed to convert result to boolean")
		}

		return exists, nil
	}

	return false, nil
}
