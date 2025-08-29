var x = 0; //variables//
var y = 0; 
var canvas; 
//otro tipo de variable con let (una variable para un contexto determinado)// 
  //y const / = es igual a : / == eso es igual a igual a = y tmb esta ==!//

function setup() { //las funciones tienen nombres por ej setup o draw//
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("cuerpo"); //esto hace que cambie el cuerpo, parent hace que cambie de "caja" entonces este canva siempre va a ir a cuerpo//
  canvas.position(0,0); //ahora cambia segun la posicion, es decir las coordenadas 0,0//
  canvas.style('z-index','-1'); //funciona como la capa por asi decirlo, pq cambia el eje z, por eso esta detras de lo que trabajamos anteriormente//
  noStroke();
  frameRate (12);
}

function draw() { //funciona como un loop ya que se condiciona lo que hablabamos en la funcion setup//
  colorMode(HSB, 200, 300, 200)
  background(map(mouseX, 0, windowWidth, 0, 359), 170, map(mouseY, 0, windowHeight, 50, 100));
  x = lerp(x, mouseX, 0.1);
  y = lerp(y, mouseY, 0.1);
  fill("red");
  textSize( random(60,150));
  text("🦝🍂🎃",x,y);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}