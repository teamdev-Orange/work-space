export class Asset {
  static brockImages = {
    0:`<img src="/images/block-0.png" class="brock1 brock"/>`,
    1:`<img src="/images/block-1.png" class="brock1 brock"/>`,
    2:`<img src="/images/block-2.png" class="brock1 brock"/>`,
    3:`<img src="/images/block-3.png" class="brock1 brock"/>`,
    4:`<img src="/images/block-4.png" class="brock1 brock"/>`,
    5:`<img src="/images/block-5.png" class="brock1 brock"/>`,
    6:`<img src="/images/block-6.png" class="brock1 brock"/>`,
  }

  constructor(x,y,BrockType){
    this.x=x
    this.y=y
    //ブロックの移動を判定するときに空のブロックを作る
    if (BrockType>=0) {
      this.setType(BrockType)
    }
  }

  setType(BrockType){
    this.BrockType=BrockType
    this.BrockImage=Asset.brockImages[BrockType]
  }
}


