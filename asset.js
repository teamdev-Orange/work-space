export class Asset {
  //落下中のブロックを特定するidを付与
  static zBrock = `<div class="zBrock" id="fallingBrock">
    <img src="/images/block-6.png" class="brock1 brock"/>
    <img src="/images/block-6.png" class="brock2 brock"/>
    <img src="/images/block-6.png" class="brock3 brock"/>
    <img src="/images/block-6.png" class="brock4 brock"/>
  </div>`;
  static iBrock = `<div class="iBrock" id="fallingBrock">
  <img src="/images/block-3.png" class="brock1 brock"/>
  <img src="/images/block-3.png" class="brock2 brock"/>
  <img src="/images/block-3.png" class="brock3 brock"/>
  <img src="/images/block-3.png" class="brock4 brock"/>
</div>`;
  static jBrock = `<div class="jBrock" id="fallingBrock">
  <img src="/images/block-1.png" class="brock1 brock"/>
  <img src="/images/block-1.png" class="brock2 brock"/>
  <img src="/images/block-1.png" class="brock3 brock"/>
  <img src="/images/block-1.png" class="brock4 brock"/>
</div>`;
  static lBrock = `<div class="lBrock" id="fallingBrock">
  <img src="/images/block-5.png" class="brock1 brock"/>
  <img src="/images/block-5.png" class="brock2 brock"/>
  <img src="/images/block-5.png" class="brock3 brock"/>
  <img src="/images/block-5.png" class="brock4 brock"/>
</div>`;
  static oBrock = `<div class="oBrock" id="fallingBrock">
  <img src="/images/block-2.png" class="brock1 brock"/>
  <img src="/images/block-2.png" class="brock2 brock"/>
  <img src="/images/block-2.png" class="brock3 brock"/>
  <img src="/images/block-2.png" class="brock4 brock"/>
</div>`;
  static tBrock = `<div class="tBrock" id="fallingBrock">
  <img src="/images/block-4.png" class="brock1 brock"/>
  <img src="/images/block-4.png" class="brock2 brock"/>
  <img src="/images/block-4.png" class="brock3 brock"/>
  <img src="/images/block-4.png" class="brock4 brock"/>
</div>`;
  static sBrock = `<div class="sBrock" id="fallingBrock">
  <img src="/images/block-0.png" class="brock1 brock"/>
  <img src="/images/block-0.png" class="brock2 brock"/>
  <img src="/images/block-0.png" class="brock3 brock"/>
  <img src="/images/block-0.png" class="brock4 brock"/>
</div>`;
  static brockNumber=0

  static createBrock(){
    let brockType=Math.floor(Math.random()*7);
    this.brockNumber+=1
    switch (brockType) {
      case 0:
        return this.zBrock;
      case 1:
        return this.iBrock;
      case 2:
        return this.jBrock;
      case 3:
        return this.lBrock;
      case 4:
        return this.oBrock;
      case 5:
        return this.tBrock;
      case 6:
        return this.sBrock;
    }
  }

  //落下中のブロックの位置を連想配列で取得するメソッド
  static currPosition(){
    let currPosition={}
    currPosition["brock1"]=document.querySelector("#fallingBrock .brock1").getBoundingClientRect()
    currPosition["brock2"]=document.querySelector("#fallingBrock .brock2").getBoundingClientRect()
    currPosition["brock3"]=document.querySelector("#fallingBrock .brock3").getBoundingClientRect()
    currPosition["brock4"]=document.querySelector("#fallingBrock .brock4").getBoundingClientRect()
    return currPosition
  }
}

// let mainBoard=document.querySelector(".game-container .main-board")
// mainBoard.innerHTML=Asset.createBrock()
// console.log(Asset.currPosition())