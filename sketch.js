function setup() {
  createCanvas(600, 400);
  somTrilha.loop()
}

//Variáveis
let xbolinha = 300
let ybolinha = 200
let vxbolinha = 6
let vybolinha = 6
let dbolinha = 25
let rbolinha = dbolinha/2
let xraquete = 5
let yraquete = 160
let hraquete = 80
let craquete = 10
let xraqueteo = 585
let yraqueteo = 160
let meuspontos = 0
let pontosop = 0
let pfundo
let somTrilha
let somColisao
let somPonto
let dificuldade = 9

//Carregando sons e imagem
function preload(){
   pfundo = loadImage('fundopong.jpg');
   somTrilha = loadSound('trilha.mp3')  
   somColisao = loadSound('raquetada.mp3')
   somPonto =  loadSound('ponto.mp3') 
}
   
//Criando bolinha e raquetes   
function draw() {
  background(pfundo);
  circle(xbolinha,ybolinha,dbolinha)
  xbolinha += vxbolinha
  ybolinha += vybolinha
  
  if ( xbolinha + rbolinha > width || 
      xbolinha - rbolinha < 0){
    vxbolinha = -1*vxbolinha
  }
  
  if ( ybolinha + rbolinha > height || 
      ybolinha - rbolinha < 0){
    vybolinha = -1*vybolinha
    }
  
   fill(000)
   rect(xraquete,yraquete,craquete,hraquete)
   rect(xraqueteo,yraqueteo,craquete,hraquete)

//Movimentação raquetes e colisões
  if(keyIsDown(UP_ARROW) && yraquete>5){
    yraquete -= 10
  }
  if(keyIsDown(DOWN_ARROW) && yraquete<320){
    yraquete += 10
  }
  if(xbolinha -rbolinha < xraquete + craquete
   && ybolinha - rbolinha < yraquete + hraquete
    && ybolinha + rbolinha > yraquete){
    vxbolinha = -1*vxbolinha
    xbolinha = xbolinha +30
    somColisao.play()
  }
    if(xbolinha + rbolinha > xraqueteo 
   && ybolinha - rbolinha < yraqueteo + hraquete
    && ybolinha + rbolinha > yraqueteo){
    vxbolinha = -1*vxbolinha
      xbolinha = xbolinha -30
      somColisao.play()
  }
  
//Movimentação da raquete do oponente  
    yraqueteo = ybolinha + dificuldade

// Criando placar
  stroke(255)
  fill(color(255,140,0))
  rect(410,15,50,30)
  fill(color(255,140,0))
  rect(150,15,50,30)
  textSize(20)
  fill(255)
  text(meuspontos,170,35)
  text(pontosop,430,35)

//Necessário criar mecânica de detecção de pontos e um "teletrasposte" da bolinha após colisão a fim de evitar bugs, tentar encontrar solução melhor a fim de não tirar fluidez do jogo  
 if(xbolinha + rbolinha > 599){
   xbolinha = xbolinha -30
   somPonto.play()
   meuspontos += 1
 }
  if(xbolinha - rbolinha < 1){
   xbolinha = xbolinha +30
   somPonto.play()
   pontosop += 1
 }
}