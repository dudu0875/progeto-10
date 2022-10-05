var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["d4cc8918-aa6f-48b8-baaf-cc1c6d294299","700b3dc6-5f8a-435b-9c20-3f79349fbcad"],"propsByKey":{"d4cc8918-aa6f-48b8-baaf-cc1c6d294299":{"name":"car_black_1","sourceUrl":"assets/api/v1/animation-library/gamelab/CSqSIJEb65ONvhatlX8ENonwX._VZQ_n/category_vehicles/car_black.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"CSqSIJEb65ONvhatlX8ENonwX._VZQ_n","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/CSqSIJEb65ONvhatlX8ENonwX._VZQ_n/category_vehicles/car_black.png"},"700b3dc6-5f8a-435b-9c20-3f79349fbcad":{"name":"pupilportrait_03_1","sourceUrl":"assets/api/v1/animation-library/gamelab/FW0CI4iuqpnTrc1d6kSj3miix6MgU7I6/category_faces/pupilportrait_03.png","frameSize":{"x":282,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"FW0CI4iuqpnTrc1d6kSj3miix6MgU7I6","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":282,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/FW0CI4iuqpnTrc1d6kSj3miix6MgU7I6/category_faces/pupilportrait_03.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//variáveis necessárias 

//programar a variável vida com início em 0.
var vida =0


//borda1 e sua cor
var borda1 = createSprite(190,120 ,420,4);
borda1.shapeColor = "black";

//borda 2 e sua cor 
var borda2 = createSprite(190, 260,420,4);
borda2.shapeColor = "black";

//sam e sua cor 
var sam = createSprite(16, 182, 14,14);
sam.shapeColor = "green";

//carros e suas cores 
var carro1 = createSprite(100,130,10,10);
carro1.shapeColor = "red";
var carro2 = createSprite(215,130,10,10);
carro2.shapeColor = "red";
var carro3 = createSprite(165,250,10,10);
carro3.shapeColor = "red";
var carro4 = createSprite(270,250,10,10);
carro4.shapeColor = "red";

//programar a velocidade dos carros

carro1.velocityY = 4;
carro2.velocityY = 4;
carro3.velocityY = -4;
carro4.velocityY = -4;
//animacao




function draw() {
  background("white");
  
  noStroke();
  fill("lightblue");
  rect(0, 120, 40, 140);
  fill("yellow");
  rect(360, 120, 40, 140);
  
  //programar a colisão dos carros com as paredes 
  carro1.bounceOff(borda1)
  carro2.bounceOff(borda1)
  carro3.bounceOff(borda1)
  carro4.bounceOff(borda1)
  carro1.bounceOff(borda2)
  carro2.bounceOff(borda2)
  carro3.bounceOff(borda2)
  carro4.bounceOff(borda2)
  
  
  
  
  //programar para o personagem se mexer (if)
if (keyDown("right")) {
    sam.x=sam.x+2;
  }
    if (keyDown("left")) {
    sam.x=sam.x-2;
  }
  
  
  
  
  
  //programar a verificação do Sam colidindo com os carros 
  //e resetando ele se ele colidir
  //contagem de vidas para executar a tarefa 
  if(sam.isTouching(carro1)||
     sam.isTouching(carro2)||
     sam.isTouching(carro3)||
     sam.isTouching(carro4))
     {
       sam.x=20;
       sam.y=190;
       vida = vida+1;
     }
  
  
  
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
