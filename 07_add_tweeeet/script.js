// HTMLが完全に読み込まれたあとに以下の処理が実行される
window.onload = function () {
    buttonClick()
}

function buttonClick() {
    // htmlのbuttonのデータを変数に格納
    const button = document.querySelector('button');
    // 変数
    var counter = 0
    // button要素が押された時の動作を定義
    button.addEventListener('click', () => {
        // count = count + 1 と同じ意味
        counter++
        // htmlのcontentの中の要素を変更している
        const container = document.getElementById('container')

        const tweet =
            '<div class="tweet">' +
            '   <img class="icon" src="http://knights.ton-katsu.net/playtime/works/c4d/75_gotoba.jpg"/>' +
            '   <div class="message_container">' +
            `       <div class="user">なまえ</div>` +
            `       <div class="message">くりっくした回数${JSON.stringify(counter)}</div>` +
            '   </div>' +
            '</div>'

        container.insertAdjacentHTML('afterbegin', tweet);
    });
}