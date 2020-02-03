window.addEventListener("DOMContentLoaded", function() {

});

function updateharmonic() {
  document.getElementById("harmonicresult").innerHTML = harmonic(document.getElementById("harmonicinput").value);
}

function updaterevharmonic() {
  document.getElementById("revharmonicresult").innerHTML = revharmonic(document.getElementById("revharmonicinput").value);
}

function revharmonic(desiredval) {
  var harmonicresult = 0;
  var i = 0;
  while (harmonicresult < desiredval) {
    i++;
    harmonicresult += 1 / i;
  }
  return i;
}

function harmonic(n) {
  var result = 0;
  for (i = 1; i <= n; i++) {
    result += 1 / i;
  }
  return result;
}