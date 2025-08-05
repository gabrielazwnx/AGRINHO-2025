let cena = 0;

function setup() {

  createCanvas(600, 400);


}
function draw() {

  background(220);

  if (cena === 0) {

    cenaCampo();

  } else if (cena === 1) {

    cenaCidade();

  } else if (cena === 2) {

    cenaTransporte();

  } else if (cena === 3) {

    cenaFeira();

  }

  // Instrução

  fill(50);

  textSize(16);

  text("Clique com o mouse para continuar ➤", 20, height - 20);

}

function mousePressed() {

  cena++;

  if (cena > 3) {

    cena = 0;

  }

}

function cenaCampo() {

  background(135, 206, 235); // céu

  fill(34, 139, 34);
 
  rect(0, 300, width, 100); // grama

  // Sol

  fill(255, 204, 0);

  ellipse(70, 70, 80, 80);

  // Plantinhas

  fill(0, 100, 0);

  for (let x = 50; x < width; x += 40) {

    rect(x, 280, 10, 20);

  }

  fill(0);

  textSize(20);

  text("Tudo começa no campo!", 180, 50);

}

function cenaCidade() {

  background(180, 220, 255); // céu

  fill(100);

  rect(0, 300, width, 100); // chão

  // Prédios

  for (let i = 0; i < 5; i++) {

    fill(150 + i * 20);

    rect(80 + i * 90, 200 - i * 10, 60, 200);

    fill(255);

    for (let j = 0; j < 3; j++) {

      rect(90 + i * 90, 210 + j * 40 - i * 10, 15, 20); // janelinhas

    }

  }

  fill(0);

  textSize(20);

  text("Na cidade, os produtos chegam até nós!", 100, 50);

}

function cenaTransporte() {

  background(255, 250, 200);

  fill(100, 200, 100);

  rect(0, 300, width, 100); // estrada

  // Caminhão

  fill(255, 0, 0);

  rect(200, 250, 100, 50); // corpo

  fill(0);

  ellipse(215, 305, 20, 20);

  ellipse(285, 305, 20, 20);

  fill(255);

  rect(260, 235, 40, 30); // cabine

  fill(0);

  textSize(20);

  text("O transporte liga o campo à cidade!", 120, 50);

}

function cenaFeira() {

  background(250, 240, 200);

  // Barraca

  fill(255, 100, 100);

  rect(200, 200, 200, 100);

  fill(255);

  rect(200, 190, 200, 20);

  // Frutas

  fill(255, 0, 0);

  ellipse(220, 230, 20, 20);

  fill(0, 255, 0);

  ellipse(260, 230, 20, 20);

  fill(255, 165, 0);

  ellipse(300, 230, 20, 20);

  fill(0);

  textSize(20);

  text("Na feira, o campo e a cidade se encontram!", 80, 50);

  // Placa

  fill(100);

  rect(240, 310, 120, 30);

  fill(255);

  textSize(14);

  text("Feira do Campo 🌽", 250, 330);

}