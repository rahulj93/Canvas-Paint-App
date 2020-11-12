document.addEventListener("DOMContentLoaded", function() {
  const graffitiWall = document.getElementById("graffiti_wall"); 
  // graffitiWall.width = window.innerWidth;
  // graffitiWall.height = window.innerHeight;
  const ctx = graffitiWall.getContext("2d"); 

  let painting = document.getElementById("content"); 
  let paintStyle = getComputedStyle(painting);
  graffitiWall.width = parseInt(paintStyle.getPropertyValue("width")); 
  graffitiWall.height = parseInt(paintStyle.getPropertyValue("height")); 

  document.getElementById("paintBrush").onclick = function() {
    new kursor({
      // type: 5,
      type: 2,
      removeDefaultCursor: true,
      // color: "#000000"
      color: "#000000"
    })
  }

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
  
  document.getElementById("default").onclick = function() {
    let color = document.getElementById("default").style.backgroundColor;
    console.log(color);
    // ctx.strokeStyle = color.toString(); 
    document.getElementById("swatch1").style.backgroundColor = color;  

    // if (color === "black") {
    //   ctx.strokeStyle = 'black'; 
    // } 
    // if (color === 'white') {
    //   ctx.strokeStyle = 'white'; 
    // }
    (color === "black") ? (ctx.strokeStyle = 'black') : (ctx.strokeStyle = 'white'); 
    (color === "white") ? (ctx.strokeStyle = 'white') : (ctx.strokeStyle = 'black'); 
    }

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

  document.getElementById("screenshot").onclick = function() {
    // ctx.save(); 
    let dataURL = graffitiWall.toDataURL(); 
    document.getElementById('canvasImg').src = dataURL;
    document.getElementById('canvasImg').style.border ="black";
    // let canvas = document.getElementById("graffiti_wall"); 
    // document.getElementById("graffiti_wall").src = canvas.toDataURL(); 
    // Canvas2Image.saveAsPNG(canvas); 
  }
  document.getElementById("download").onclick = function() {
    // window.open(graffitiWall.toDataURL('image/png')); 
    var gh = graffitiWall.toDataURL('png');
    var a = document.createElement('a'); 
    a.href = gh; 
    a.download = 'image.png'; 
    a.click(); 
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
    alert("Don't forget to save your work!")
    ctx.clearRect(0, 0, graffitiWall.width, graffitiWall.height);
    ctx.strokeStyle = 'black'; 
    document.getElementById("swatch1").style.backgroundColor = "black";
  };

  document.getElementById("smallBrush").onclick = function() {
    document.body.style.cursor = "auto";
    ctx.lineWidth = 1; 
  }
  document.getElementById("mediumBrush").onclick = function() {
    ctx.lineWidth = 5; 
  }
  document.getElementById("largeBrush").onclick = function() {
    ctx.lineWidth = 9; 
  }

  window.onresize = function () {
    let painting = document.getElementById("content");
    let paintStyle = getComputedStyle(painting);
    graffitiWall.width = parseInt(paintStyle.getPropertyValue("width"));
    graffitiWall.height = parseInt(paintStyle.getPropertyValue("height")); 
    ctx.lineWidth = 5; 
  }

  document.getElementById("lightMode").onclick = function () {
    document.getElementById("graffiti_wall").style.backgroundColor = "white"; 
    ctx.strokeStyle = "black"; 
    document.getElementById("swatch1").style.backgroundColor = "black";
    document.getElementById("default").style.backgroundColor = "black";
    document.getElementById('canvasImg').style.backgroundColor = "white";
  }
  document.getElementById("darkMode").onclick = function () {
    document.getElementById("graffiti_wall").style.backgroundColor = "black"; 
    ctx.strokeStyle = "white"; 
    document.getElementById("swatch1").style.backgroundColor = "white";
    document.getElementById("default").style.backgroundColor = "white";
    document.getElementById('canvasImg').style.backgroundColor = "black";
    document.getElementById('canvasImg').style.color = "white";
  }


});