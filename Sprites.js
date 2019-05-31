
function Sprite(x, y, largura, altura){
  this.x = x;
  this.y = y;
  this.largura = largura;
  this.altura = altura;
  
  this.desenha = function(xCanvas, yCanvas) {
  ctx.drawImage(img, this.x, this.y, this.largura, this.altura, xCanvas, yCanvas, this.largura, this.altura);
  } 
}

var bg = new Sprite(69, 107, 608, 540),   
spriteBoneco = new Sprite(805, 354 , 37, 44),
spriteObstacle = new Sprite(966, 295, 50, 120),
spriteChao = new Sprite(69, 648, 608, 54 ),
spriteStart = new Sprite(847, 102, 251, 95),
spriteFim = new Sprite(871, 515, 206, 100),
spriteBarra = new Sprite(824, 218, 289, 64),
spriteHighScore = new Sprite(871, 649, 203, 45);





