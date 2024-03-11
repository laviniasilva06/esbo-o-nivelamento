function setup() {
    createCanvas(900, 800);
      background("blue");
  
  }
  
  function draw() {
  
     stroke("pink");
     fill("black");
    
     if(mouseIsPressed){
        rect(mouseX, mouseY, 10,10);
     }
  }