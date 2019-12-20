package main

import (
	"net/http"
)

func main() {
	// 「localhost:8080/」に対して処理を追加
	http.HandleFunc("/", indexHandler)

	// 8080ポートで起動
	http.ListenAndServe(":8080", nil)
}

func indexHandler(w http.ResponseWriter, r *http.Request) {
	header(w)

	// データのタイプの設定
	w.Header().Set("Content-Type", "application/json")
	// データの返却
	w.Write([]byte(`{ "name" : "ごーふぁーちゃん", "message" : "こんにちわ"}`))

}

func header(w http.ResponseWriter) {
	// reactはlocalhost:3000,goのWebアプリはlocalhost:8080で起動しているため記述
	// ブラウザ上では別のドメインから双方アクセスしているクロスドメイン扱いになります

	//リモートアドレスからのアクセスを許可する
	w.Header().Set("Access-Control-Allow-Origin", "*")
	//認証を行う
	w.Header().Set("Access-Control-Allow-Credentials", "true")
	w.Header().Set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization")
	//必要なメソッドを許可する
	w.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
}
