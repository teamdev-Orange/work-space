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

function moveBlockLeft(){
    //1.ブロックの現在地を取得//
    const currentBlock = document.getElementById('fallingBrock');
    const currentPosition = currentBlock.getBoundingClientRect();

    //2.ゲームボードの左端の値//
    const gameBoard = document.querySelector('.game-container .main-board');
    const gameBoardPosition = gameBoard.getBoundingClientRect();

    // 3.ブロックがゲームボードの左端に達しているか確認//
    if (currentPosition.left > gameBoardPosition.left) {
        // 他のブロックとの衝突判定を追加//

        // 4. ブロックを左に移動//
        const moveDistance = 24; // 24は1ブロックの幅に基づく値. あとで調整//
        currentBlock.style.left = (currentPosition.left - moveDistance) + 'px';
    }
}
