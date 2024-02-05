package config

import (
	"context"
	"fmt"
	"github.com/go-redis/redis/v8"
	"github.com/neo4j/neo4j-go-driver/v5/neo4j"
)

func SetupRedis() *redis.Client {
	client := redis.NewClient(&redis.Options{
		Addr:     "localhost:6379", // Redis server address
		Password: "",
		DB:       0, // Default DB
	})

	pong, err := client.Ping(context.Background()).Result()
	if err != nil {
		fmt.Printf("Failed to connect to Redis: %v\n", err)
	} else {
		fmt.Printf("Connected to Redis: %v\n", pong)
	}

	return client
}

func GetNeo4jDriver() (neo4j.Driver, error) {
	uri := "bolt://localhost:7687" // Replace with your Neo4j URI
	username := "neo4j"            // Replace with your Neo4j username
	password := "your_password"         // Replace with your Neo4j password

	driver, err := neo4j.NewDriver(uri, neo4j.BasicAuth(username, password, ""))
	if err != nil {
		fmt.Print("neo4j error")

	}

	return driver, nil
}
