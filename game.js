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



//ブロックの操作//
document.addEventListener('keydown', function(event){
    switch(event.keyCode){
        case 37: //左矢印//
            moveBlockLeft();
            break;
        case 39: //右矢印//
            moveBlockRight();
            break;
        case 40: //下矢印//
            increaseDropSpeed();
            break;
        case 38: //上矢印//
            rotateBlock();
            break;
    }
});


