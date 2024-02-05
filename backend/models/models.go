package models

type Product struct {
	ProductID         int    `json:"ProductID"`
	Name              string `json:"Name"`
	GHGFootprint      string `json:"GHGFootprint"`
	IGHGFootprint     string `json:"IGHGFootprint"`
	PGHGFooting       string `json:"PGHGFooting"`
	RecycledPlas      string `json:"RecycledPlas"`
	RecycledCardboard string `json:"recycledCardboard"`
	SSM               string `json:"SSM"`
	Palmoil           string `json:"Palmoil"`
	PFAS              string `json:"PFAS"`
	Parabens          string `json:"Parabens"`
	Phalates          string `json:"Phalates"`
	Country           string `json:"Country"`
	REU               string `json:"REU"`
	UWS               string `json:"UWS"`
	WtL               string `json:"WtL"`
	FCF               string `json:"FCF"`
	TextGHGFootprint  string `json:"TextGHGFootprint"`
	TextIGHGFootprint string `json:"TextIGHGFootprint"`
	TextPGHGFooting   string `json:"TextPGHGFooting"`
	TextRecycledPlas  string `json:"TextRecycledPlas"`
}