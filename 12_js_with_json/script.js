// HTMLが完全に読み込まれたあとに以下の処理が実行される
window.onload = function () {
    buttonClick()
}

function buttonClick() {
    // htmlのbuttonのデータを変数に格納
    const button = document.querySelector('button');

    // button要素が押された時の動作を定義
    button.addEventListener('click', () => {
        tweeetList();
    });
}

function tweeetList() {
    const messageList = returnJSONList()
    messageList.forEach(data => insertTweetHTML(data));

}

function returnJSONList() {
    return [
        {
            name: "とんかつ",
            message: "あんぱん"
        },
        {
            name: "えびふらい",
            message: "カレーパン"
        },
        {
            name: "かきあげ",
            message: "しょくぱん"
        },
    ]
}

function insertTweetHTML(data) {
    // containerのcontentの中の要素を変更している
    const container = document.getElementById('container')
    const insertHtmlName = `<div id="user"> Name: ${JSON.stringify(data.name)}</div>`
    const insertHtmlContent = `<div id="user"> Message: ${JSON.stringify(data.message)} </div>`
    container.insertAdjacentHTML('afterbegin', insertHtmlName + insertHtmlContent);
}