
function Sprite(x, y, largura, altura){
  this.x = x;
  this.y = y;
  this.largura = largura;
  this.altura = altura;
  
  this.desenha = function(xCanvas, yCanvas) {
  ctx.drawImage(img, this.x, this.y, this.largura, this.altura, xCanvas, yCanvas, this.largura, this.altura);
  } 
}

var bg = new Sprite(69, 60, 608, 600), 
spriteBoneco = new Sprite(805, 354 , 37, 44),
spriteObstacle = new Sprite(966, 295, 50, 120),
spriteChao = new Sprite(69, 620,608, 54 );