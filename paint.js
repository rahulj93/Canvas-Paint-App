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
  
  document.getElementById("black").onclick = function() {
    ctx.strokeStyle = 'black'; 
    document.getElementById("swatch1").style.backgroundColor = "black";
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

  document.getElementById("save").onclick = function() {
    // ctx.save(); 
    alert("ayooo save this! "); 
    let dataURL = graffitiWall.toDataURL(); 
    console.log(dataURL);
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

  document.getElementById("eraser").onclick = function() {
    ctx.strokeStyle = "white"; 
    document.body.style.cursor = "crosshair";
  }


  // const clearBoard = document.getElementById("clearBoard"); 
  // clearBoard.onsubmit = function() {
  //   alert('hello');
  //   // ctx.clearRect(0, 0, graffitiWall.width, graffitiWall.height);
  // }

  // document.getElementById("brushSize").onsubmit = function() {


  // let form = document.getElementById("brushSize");
  // function handleForm(e) { 
  //   e.preventDefault(); 
  // }
  // form.addEventListener('submit', handleForm);


  document.getElementById("smallBrush").onclick = function() {
    ctx.lineWidth = 1; 
  }
  document.getElementById("mediumBrush").onclick = function() {
    ctx.lineWidth = 5; 
  }
  document.getElementById("largeBrush").onclick = function() {
    ctx.lineWidth = 9; 
  }

  document.getElementById("smallEraser").onclick = function() {
    ctx.strokeStyle = "white";
    document.body.style.cursor = "crosshair";
    ctx.lineWidth = 1; 
  }
  document.getElementById("mediumEraser").onclick = function() {
    ctx.strokeStyle = "white";
    document.body.style.cursor = "crosshair";
    ctx.lineWidth = 5; 
  }
  document.getElementById("largeEraser").onclick = function() {
    ctx.strokeStyle = "white";
    document.body.style.cursor = "crosshair";
    ctx.lineWidth = 9; 
  }

// setBrushSize = () => {
//   // e.preventDefault();
//   let select = document.getElementById('brushSize'); 
//   // let x = document.getElementById("brushSize").value; 
//   let x = select.options[select.selectedIndex].value; 
//   // document.brushSizeForm.action 
//   alert(x); 
//     // alert(x);
//     if (x= "small") {
//       console.log("small");
//       ctx.lineWidth = 1; 
//     } else if (x = "large") {
//       console.log("large");
//       ctx.lineWidth = 9; 
//     } else {
//       console.log("medium");
//       ctx.lineWidth = 5; 
//     }
//     return false; 
// }


});