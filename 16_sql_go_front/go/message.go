package main

import "log"

// Message jsonの中身の定義
type Message struct {
	ID      int    `json:"id"`
	Name    string `json:"name"`
	Message string `json:"message"`
}

// MessageList Messageの集合体
type MessageList []Message

func getMessageList() MessageList {
	// SELECT
	rows, err := SQLHandler.Query("SELECT * FROM messages")

	if err != nil {
		log.Println(err)
	}
	defer rows.Close()

	// MessageListの変数を作っておく
	var ml MessageList
	for rows.Next() {
		var m Message
		if err := rows.Scan(&m.ID, &m.Name, &m.Message); err != nil {
			log.Println(err)
		}
		// 1項目づつMessageListに追加していく
		ml = append(ml, m)
		log.Println("Log MessgeList", m)
	}
	return ml
}
