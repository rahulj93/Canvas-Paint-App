document.addEventListener("DOMContentLoaded", function() {
  const graffitiWall = document.getElementById("graffiti_wall"); 

  const ctx = graffitiWall.getContext("2d"); 

  let painting = document.getElementById("content"); 
  let paintStyle = getComputedStyle(painting);
  graffitiWall.width = parseInt(paintStyle.getPropertyValue("width")); 
  graffitiWall.height = parseInt(paintStyle.getPropertyValue("height")); 

  let mouse = {x: 0, y: 0}; 

  graffitiWall.addEventListener('mousemove', function(e) {
    mouse.x = e.pageX - this.offsetLeft; 
    mouse.y = e.pageY - this.offsetTop; 
    // - graffitiWall.height; 
    // mouse.y = graffitiWall.height - this.offsetTop; 
  }, false); 

  
  ctx.lineWidth = 5; 
  // ctx.lineJoin = 'round'; 
  // ctx.lineJoin = 'miter'; 
  ctx.lineJoin = 'bevel'; 
  ctx.lineCap = 'round'; 
  // ctx.lineCap = 'butt'; 
  ctx.strokeStyle = 'black'; 

  document.getElementById("red").onclick = function() {
    ctx.strokeStyle = 'red'; 
    document.getElementById("swatch1").style.backgroundColor = "red";

  }
  document.getElementById("blue").onclick = function() {
    ctx.strokeStyle = 'blue'; 
    document.getElementById("swatch1").style.backgroundColor = "blue";
  }
  document.getElementById("yellow").onclick = function() {
    ctx.strokeStyle = 'yellow'; 
    document.getElementById("swatch1").style.backgroundColor = "yellow";
  }
  document.getElementById("green").onclick = function() {
    ctx.strokeStyle = 'green'; 
    document.getElementById("swatch1").style.backgroundColor = "green";
  }
  

  graffitiWall.addEventListener('mousedown', function(e) {
    ctx.beginPath(); 
    ctx.moveTo(mouse.x, mouse.y); 
    graffitiWall.addEventListener('mousemove', onPaint, false); 
  }, false); 

  graffitiWall.addEventListener('mouseup', function() {
    graffitiWall.removeEventListener('mousemove', onPaint, false)
  }, false); 

  let onPaint = function() {
    ctx.lineTo(mouse.x, mouse.y);
    ctx.stroke(); 
  }

  document.getElementById("clearBoard").onclick = function() {
    ctx.clearRect(0, 0, graffitiWall.width, graffitiWall.height);
    ctx.strokeStyle = 'black'; 
    document.getElementById("swatch1").style.backgroundColor = "black";

  };


  // const clearBoard = document.getElementById("clearBoard"); 
  // clearBoard.onsubmit = function() {
  //   alert('hello');
  //   // ctx.clearRect(0, 0, graffitiWall.width, graffitiWall.height);
  // }


});