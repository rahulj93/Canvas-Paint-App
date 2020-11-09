document.addEventListener("DOMContentLoaded", function() {
  const graffitiWall = document.getElementById("graffiti_wall"); 
  // graffitiWall.width = 750;
  // graffitiWall.height = 750; 

  const ctx = graffitiWall.getContext("2d"); 
  ctx.fillStyle = "gray";
  // ctx.fillRect(0,0,750,750);
  // ctx.fillRect(0,0,1000,1000);
  ctx.fillRect(0,0,10000, 10000);
  ctx.fillRect();


});