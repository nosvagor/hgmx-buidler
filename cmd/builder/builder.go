package main

import (
	"log"

	"github.com/nosvagor/hgmx/internal/server"
)

func main() {
	cfg := server.Config{
		Port: "3008",
	}
	srv := server.New(cfg)

	log.Fatal(server.Start(srv))
}
