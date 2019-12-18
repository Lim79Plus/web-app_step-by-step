// HTMLが完全に読み込まれたあとに以下の処理が実行される
window.onload = function () {
    bottonClick()
}

function bottonClick() {
    // htmlのbuttonのデータを変数に格納
    const button = document.querySelector('button');

    // button要素が押された時の動作を定義
    button.addEventListener('click', () => {
        // htmlのcontentの中の要素を変更している
        fetch('http://localhost:8080')
            .then(response => response.json())
            .then(data => data.
                forEach(item => insertTweetHTML(item)))

    });
}

function insertTweetHTML(item) {
    console.log("insertTweetHTML", item)
    // containerのcontentの中の要素を変更している
    const container = document.getElementById('container')

    const tweet =
        '<div class="tweet">' +
        '   <img class="icon" src="http://knights.ton-katsu.net/playtime/works/painting/82_sonshi.jpg"/>' +
        '   <div class="message_container">' +
        '       <div class="user">${JSON.stringify(item.name)}</div>' +
        '       <div class="message">${JSON.stringify(item.message)}</div>' +
        '   </div>' +
        '</div>'

    container.insertAdjacentHTML('afterbegin', tweet);}