const jump = 25;
function leftArrowPressed() {
    var element = document.getElementById("image1");
    element.style.left = parseInt(element.style.left) - jump + "px";
    console.log("x: " + horiSteps + " , y: " + vertSteps);
}

function rightArrowPressed() {
    var element = document.getElementById("image1");
    element.style.left = parseInt(element.style.left) + jump + "px";
    console.log("x: " + horiSteps + " , y: " + vertSteps);
}

function upArrowPressed() {
    var element = document.getElementById("image1");
    element.style.top = parseInt(element.style.top) - jump + "px";
    console.log("x: " + horiSteps + " , y: " + vertSteps);
}

function downArrowPressed() {
    var element = document.getElementById("image1");
    element.style.top = parseInt(element.style.top) + jump + "px";
    console.log("x: " + horiSteps + " , y: " + vertSteps);
}


function moveSelection(evt) {
  switch (evt.keyCode) {
    case 37:
      leftArrowPressed();
      horiSteps = horiSteps - jump;
      break;
    case 39:
      rightArrowPressed();
      horiSteps = horiSteps + jump;
      break;
    case 38:
      upArrowPressed();
      vertSteps = vertSteps - jump;
      break;
    case 40:
      downArrowPressed();
      vertSteps = vertSteps + jump;
      break;
    case 13:
      enterKeyPressed();
      break;
  }
}

function docReady() {
  window.addEventListener("keydown", moveSelection);
}