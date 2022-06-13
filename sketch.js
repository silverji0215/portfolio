var canvas;
function setup() {
    canvas = createCanvas(windowWidth,windowHeight, WEBGL);
    canvas.position(0, 0);
    canvas.style('z-index','3')
    
    
    
    angleMode(DEGREES);
  }
  
  function draw() {
    background(25);
    
    rotateX(60);
    
    noFill();
    stroke(255);
    
    for(var i=0; i<80; i++){
      
      var r=map(sin(frameCount),-1,1,100,200);
      var g=map(i,0,50,100,200);
      var b=map(cos(frameCount),-1,1,200,100);
      
      stroke(r,g,b);
      
      rotate(frameCount/20);
      
      
      beginShape()
      for(var j=0; j < 360; j+=60){
        var rad = i*3
        var x = rad * cos(j)
        var y = rad * sin(j)
        var z = sin(frameCount*4 +i*5)*50
        
        vertex(x,y,z)
      }
      endShape(CLOSE);
    }
  }
  
  