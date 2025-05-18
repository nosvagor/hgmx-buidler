package server

import (
	"fmt"
	"net/http"
	"time"
)

type Config struct {
	Port string
}

func New(cfg Config) *http.Server {
	if cfg.Port == "" {
		cfg.Port = "3008"
	}
	addr := ":" + cfg.Port

	server := &http.Server{
		Addr:         addr,
		ReadTimeout:  5 * time.Second,
		WriteTimeout: 10 * time.Second,
		IdleTimeout:  120 * time.Second,
		Handler:      NewRouter(),
	}

	return server
}

func Start(server *http.Server) error {
	fmt.Printf("Server listening on http://localhost%s\n", server.Addr)
	return server.ListenAndServe()
}
