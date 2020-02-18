window.addEventListener("DOMContentLoaded", function() {
  carousel(1, 2);
  carousel(2, 3);
  carousel(3, 5);
  carousel(4, 2.5);
  carousel(5, 2.618);
});
var myIndex = 0;

function carousel(n, dur) {
  var i;
  var x = document.getElementsByClassName("slide" + n);
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1
  }
  x[myIndex - 1].style.display = "block";
  setTimeout(function() {
    carousel(n, dur)
  }, dur * 1000);
}