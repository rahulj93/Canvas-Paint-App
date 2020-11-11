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

  ctx.lineWidth = 3; 
  ctx.lineJoin = 'round'; 
  ctx.lineCap = 'round'; 
  ctx.strokeStyle = 'black'; 

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


});