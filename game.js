// モーダルウィンドウとボタン、閉じるボタンの要素を取得
var modal = document.getElementById("modal"); // ここを修正
var btn = document.querySelector(".instruction");
var span = document.querySelector(".close");

// ボタンをクリックしたときの動作
btn.onclick = function() {
    modal.style.display = "block";
}

// 閉じるボタンをクリックしたときの動作
span.onclick = function() {
    modal.style.display = "none";
}

// モーダルウィンドウの外側をクリックしたときの動作
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}