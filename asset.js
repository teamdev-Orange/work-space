class Asset {
  static zBrock = `<div class="zBrock">
    <img src="/images/block-6.png" class="brock1 brock"/>
    <img src="/images/block-6.png" class="brock2 brock"/>
    <img src="/images/block-6.png" class="brock3 brock"/>
    <img src="/images/block-6.png" class="brock4 brock"/>
  </div>`;
  static iBrock = `<div class="iBrock">
  <img src="/images/block-3.png" class="brock1 brock"/>
  <img src="/images/block-3.png" class="brock2 brock"/>
  <img src="/images/block-3.png" class="brock3 brock"/>
  <img src="/images/block-3.png" class="brock4 brock"/>
</div>`;
  static jBrock = `<div class="jBrock">
  <img src="/images/block-1.png" class="brock1 brock"/>
  <img src="/images/block-1.png" class="brock2 brock"/>
  <img src="/images/block-1.png" class="brock3 brock"/>
  <img src="/images/block-1.png" class="brock4 brock"/>
</div>`;
  static lBrock = `<div class="lBrock">
  <img src="/images/block-5.png" class="brock1 brock"/>
  <img src="/images/block-5.png" class="brock2 brock"/>
  <img src="/images/block-5.png" class="brock3 brock"/>
  <img src="/images/block-5.png" class="brock4 brock"/>
</div>`;
  static oBrock = `<div class="oBrock">
  <img src="/images/block-2.png" class="brock1 brock"/>
  <img src="/images/block-2.png" class="brock2 brock"/>
  <img src="/images/block-2.png" class="brock3 brock"/>
  <img src="/images/block-2.png" class="brock4 brock"/>
</div>`;
  static tBrock = `<div class="tBrock">
  <img src="/images/block-4.png" class="brock1 brock"/>
  <img src="/images/block-4.png" class="brock2 brock"/>
  <img src="/images/block-4.png" class="brock3 brock"/>
  <img src="/images/block-4.png" class="brock4 brock"/>
</div>`;
  static sBrock = `<div class="sBrock">
  <img src="/images/block-0.png" class="brock1 brock"/>
  <img src="/images/block-0.png" class="brock2 brock"/>
  <img src="/images/block-0.png" class="brock3 brock"/>
  <img src="/images/block-0.png" class="brock4 brock"/>
</div>`;


  static createBrock(){
    let brockType=Math.floor(Math.random()*7);

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
}


const Brock=document.getElementById("brock")

Brock.innerHTML=Asset.createBrock()