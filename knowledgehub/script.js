window.addEventListener("DOMContentLoaded", function() {
  makeclouds();

});




function makeclouds() {
  for (var i = 1; i <= 64; i++) {
    var canvas = document.createElement("CANVAS"); // Create a <button> element
    canvas.setAttribute("id", "cloud" + i);
    canvas.setAttribute("height", 200);
    canvas.setAttribute("width", 578);
    document.body.appendChild(canvas);
  }
  makecloud("HEEHEE", "blehh", 1);
  makecloud("check", "lord gryffin", 2);
  makecloud("checfk", "lord gryffddewin", 17);
}









function makecloud(word, meaning, id) {
  // draw cloud
  var canvasid = "cloud" + id;
  var canvas = document.getElementById(canvasid);
  var context = canvas.getContext('2d');

  context.beginPath();
  context.moveTo(170, 80);
  context.bezierCurveTo(130, 100, 130, 150, 230, 150);
  context.bezierCurveTo(250, 180, 320, 180, 340, 150);
  context.bezierCurveTo(420, 150, 420, 120, 390, 100);
  context.bezierCurveTo(430, 40, 370, 30, 340, 50);
  context.bezierCurveTo(320, 5, 250, 20, 250, 50);
  context.bezierCurveTo(200, 5, 150, 20, 170, 80);
  context.closePath();
  context.lineWidth = 5;
  context.fillStyle = 'lightblue';
  context.fill();
  context.strokeStyle = 'lightblue';
  context.stroke();
  context.font = "1.5em Futura";
  context.fillStyle = "black";
  context.textAlign = "center";
  context.fillText(word, canvas.width / 2, canvas.height / 2.5);
  canvas.onclick = function() {
    context.font = "1em Futura";
    context.fillStyle = "black";
    context.textAlign = "center";
    context.fillText(meaning, canvas.width / 2, canvas.height / 1.7);
    canvas.onclick = function() {}
  }

}