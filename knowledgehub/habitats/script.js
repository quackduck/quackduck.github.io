window.addEventListener("DOMContentLoaded", function() {
  carousel(1, 5);
  carousel(2, 5);
  carousel(3, 5);
  carousel(4, 5);
  carousel(5, 5);
});
var index = [0, 0, 0, 0, 0];

function carousel(n, dur) {
  var i;
  var x = document.getElementsByClassName("slide" + n);
  for (i = 0; i < x.length; i++) {
    x[i].style["animationDuration"] = dur + "s";
    x[i].style.display = "none";

  }
  index[n - 1]++;
  if (index[n - 1] > x.length) {
    index[n - 1] = 1;
  }
  x[index[n - 1] - 1].style.display = "block";
  setTimeout(function() {
    carousel(n, dur)
  }, dur * 1000);
}