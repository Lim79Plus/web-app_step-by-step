// HTMLが完全に読み込まれたあとに以下の処理が実行される
window.onload = function () {
    buttonClick()
}

function buttonClick() {
    // htmlのbuttonのデータを変数に格納
    const button = document.querySelector('button');
    const container = document.getElementById('container')
    var counter = 0

    // button要素が押された時の動作を定義
    button.addEventListener('click', () => {
        // count = count + 1 と同じ意味
        counter++
        // containerのcontentの中の要素を変更している
        const insertHtmlName = `<div id="user"> Name Space </div>`
        const insertHtmlContent = `<div id="user"> Click count: ${counter} </div>`
        container.insertAdjacentHTML('afterbegin', insertHtmlName + insertHtmlContent);
    });
}

// 