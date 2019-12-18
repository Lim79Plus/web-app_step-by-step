package main

import (
	"database/sql"
	"log"

	_ "github.com/go-sql-driver/mysql"
)

// SQLHandler for access db
var SQLHandler *sql.DB

func sqlInit() {
	conn, err := sql.Open("mysql", "docker:docker@/tweeet")
	if err != nil {
		panic(err.Error)
	}
	log.Println("successflly get db connect")
	SQLHandler = conn
}
