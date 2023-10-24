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
    

// ブロックが上枠を超えたかどうかをチェックする関数
function isBlockOutOfBound() {
    // ... 上枠を超えたブロックをチェックするロジック
  }
  
  // ゲームループ
  function gameLoop() {
    if (isPaused || isGameOver) return;  // ゲームが一時停止またはゲームオーバーの場合、早期に戻ります
  
    if (isBlockOutOfBound()) {
      isGameOver = true;  // ゲームを終了させます
      showModalWithScore();  // スコアを表示するモーダルを表示します
      return;
    }
  
    // ... ゲームループの残りのロジック
  }
  
  let isGameOver = false;
  
  // スコアを表示するモーダルを表示する関数
  function showModalWithScore() {
    // スコアを計算します
    let score = calculateScore();
    // モーダルのコンテンツを更新します
    document.querySelector('.modal-content').innerHTML = `
      <h2>Game Over</h2>
      <p>Your Score: ${score}</p>
      <button onclick="retry()">Retry</button>
    `;
    // モーダルを表示します
    modal.style.display = "block";
  }
  
  // スコアを計算する関数 (仮定)
  function calculateScore() {
    // ... スコア計算ロジック
  }
  
  // リトライするための関数
  function retry() {
    // ゲームの状態をリセットします
    resetGame();
    // モーダルを非表示にします
    modal.style.display = "none";
    // ゲームを再開します
    isGameOver = false;
    isPaused = false;
  }
  
  // ゲームをリセットする関数 (仮定)
  function resetGame() {
    // ... ゲームリセットロジック
  }
}
