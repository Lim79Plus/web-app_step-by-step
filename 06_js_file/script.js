// HTMLが完全に読み込まれたあとに以下の処理が実行される
window.onload = function () {
    buttonClick()
}

function buttonClick() {
    // htmlのbuttonのデータを変数に格納
    const button = document.querySelector('button');
    const content = document.getElementById('content')
    // 変数
    var counter = 0

    // button要素が押された時の動作を定義
    button.addEventListener('click', () => {
        // count = count + 1 と同じ意味
        counter++
        // htmlのcontentの中の要素を変更している
        content.innerHTML = `Click count: ${counter}`;
    });
}