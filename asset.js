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


export class Asset {
  //blockの色をまとめる配列に変えました
  static blockColor = {
    "O":"red",
    "T":"blue",
    "Z":"yellow",
    "S":"green",
    "I":"aqua",
    "L":"purple",
    "J":"orange",
  }

  constructor(x = 0, y = 0, BlockType) {
    this.x = x;
    this.y = y;
    this.board = [];
    for (let i = 0; i < 20; i++) {
      this.board.push(new Array(10).fill(0));
    }
    if (BlockType >= 0) {
      this.setType(BlockType);
    }
  }

  checkFullRows() {
    for (let y = 0; y < this.board.length; y++) {
      if (this.board[y].every(cell => cell === 1)) {
        this.clearRow(y);
      }
    }
  }
  
  clearRow(rowNumber) {
    this.board.splice(rowNumber, 1);
    this.board.unshift(new Array(10).fill(0));
  }

  setType(BlockType){
    this.BlockType=BlockType
    this.BlockColor=Asset.blockColor[BlockType]
  }

  //ブロックの形に応じて画像をキャンバスに描画する//
  drawBlockPattern(ctx, blockType){
    const pattern = blockPatterns[blockType];
    const cellSize = 24;
    const blockColor=Asset.blockColor[blockType];
    for (let y = 0; y < pattern.length; y++) {
      for (let x = 0; x < pattern[y].length; x++) {
        if (pattern[y][x] === 1) {
          const posX = this.x + x * cellSize;
          const posY = this.y + y * cellSize;
          ctx.fillStyle = blockColor;
          ctx.fillRect(posX, posY, cellSize, cellSize);
          ctx.strokeStyle = 'black';
          ctx.strokeRect(posX, posY, cellSize, cellSize);
        }
      }
    }
  }
}



