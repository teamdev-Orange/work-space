const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d");

const blockPatterns = {
  "O": [
    [0, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
  ],

  "T":[
    [0, 0, 0, 0],
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 0, 0, 0],
  ],
  
  "Z":[
    [0, 0, 0, 0],
    [1, 1, 0, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
  ],

  "S":[
    [0, 0, 0, 0],
    [0, 0, 1, 1],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
  ],

  "I":[
    [0, 0, 0, 0],
    [1, 1, 1, 1],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],

  "L":[
    [0, 0, 0, 0],
    [0, 0, 1, 0],
    [1, 1, 1, 0],
    [0, 0, 0, 0],
  ],

  "J":[
    [0, 0, 0, 0],
    [1, 0, 0, 0],
    [1, 1, 1, 0],
    [0, 0, 0, 0],
  ],
}

//brock→blockに変更しました//
export class Asset {
  static blockImages = {
    0:`<"/images/block-0.png" class="block1 block"/>`,
    1:`<"/images/block-1.png" class="block1 block"/>`,
    2:`<"/images/block-2.png" class="block1 block"/>`,
    3:`<"/images/block-3.png" class="block1 block"/>`,
    4:`<"/images/block-4.png" class="block1 block"/>`,
    5:`<"/images/block-5.png" class="block1 block"/>`,
    6:`<"/images/block-6.png" class="block1 block"/>`,
  }

  constructor(x,y,BlockType){
    this.x=x
    this.y=y
    this.image = new Image();
    //ブロックの移動を判定するときに空のブロックを作る
    if (BlockType>=0) {
      this.setType(BlockType)
    }
  }

  setType(BlockType){
    this.BlockType=BlockType
    this.BlockImage=Asset.blockImages[BlockType]
  }

  //ブロックの形に応じて画像をキャンバスに描画する//
  drawBlockPattern(ctx, blockType){
    const pattern = blockPatterns[blockType];
    const cellSize = 24;

    for (let y = 0; y < pattern.length; y++) {
      for (let x = 0; x < pattern[y].length; x++) {
        if (pattern[y][x] === 1) {
          const posX = this.x + x * cellSize;
          const posY = this.y + y * cellSize;
          ctx.drawImage(this.image, posX, posY, cellSize, cellSize);
        }
      }
    }
  }
}