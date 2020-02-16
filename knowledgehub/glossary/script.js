window.addEventListener("DOMContentLoaded", function() {
  makeclouds();

});

function makeclouds() {
  for (var i = 1; i <= 64; i++) {
    var canvas = document.createElement("CANVAS"); // Create a <button> element
    canvas.setAttribute("id", "cloud" + i);
    canvas.setAttribute("height", 200);
    canvas.setAttribute("width", 578);
    document.getElementById("clouds").appendChild(canvas);
  }
  makecloud("Biodiversity", "Number and types of species in the wild", 1);
  makecloud("Biodiversity Hotspots", "A habitat with a high number of different species", 2);
  makecloud("Bioindicators", "Species used as a measure of some aspects of an ecosystem's health", 3);
  makecloud("Blue Carbon Sinks", "Coastal ecosystems which store more carbon than land forests", 4);
  makecloud("Camouflage", "Hiding by disguising", 5);
  makecloud("Climate Change", "Human caused long term changes to global climates", 6);
  makecloud("Conservation", "Restore, protect and preserve ecosystems", 7);
  makecloud("Coral Reefs", "An ecosystem of reef building corals", 8);
  makecloud("Denning", "A habitat or retreat of an animal", 9);
  makecloud("Ecosystem", " A combination of Non living things and Living things interacting ", 10);
  makecloud("Ecosystem Services", "How humans benefit from a healthy ecosystem", 11);
  makecloud("Endemic Species", "A native species not found anywhere else", 12);
  makecloud("Environmental Impact", "Impact on the environment as a result of something", 13);
  makecloud("Extinction", "What happens to a species when all of its members die out", 14);
  makecloud("Fauna", "All life present in a particular region, habitat or time", 15);
  makecloud("Flagship Species", "A symbolic species of a habitat", 16);
  makecloud("Flora", "All plants in a region, habitat or time", 17);
  makecloud("Greenhouse Gases", "Gases that trap heat and contribute to climate change", 18);
  makecloud("Habitat", "The natural environment of a species", 19);
  makecloud("Habitat Loss", "When a habitat is no longer able to sustain species", 20);
  makecloud("", "", 21);
  makecloud("", "", 23);
  makecloud("", "", 24);
  makecloud("", "", 25);
  makecloud("", "", 26);
  makecloud("", "", 27);
  makecloud("", "", 28);
  makecloud("", "", 29);
  makecloud("", "", 30);
  makecloud("", "", 31);
  makecloud("", "", 32);
  makecloud("", "", 33);
  makecloud("", "", 34);
  makecloud("", "", 35);
  makecloud("", "", 36);
  makecloud("", "", 37);
  makecloud("", "", 38);
  makecloud("", "", 39);
  makecloud("", "", 40);
  makecloud("", "", 41);
  makecloud("", "", 42);
  makecloud("", "", 43);
  makecloud("", "", 44);
  makecloud("", "", 45);
  makecloud("", "", 46);
  makecloud("", "", 47);
  makecloud("", "", 48);
  makecloud("", "", 49);
  makecloud("", "", 50);



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
  context.font = "1.3em Futura";
  context.fillStyle = "black";
  context.textAlign = "center";
  context.fillText(word, canvas.width / 2, canvas.height / 2.5);
  canvas.onclick = function() {
    context.font = "0.8em Futura";
    context.fillStyle = "black";
    context.textAlign = "center";
    context.fillText(meaning, canvas.width / 2, canvas.height / 1.7);
    canvas.onclick = function() {}
  }

}