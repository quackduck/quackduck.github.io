window.addEventListener("DOMContentLoaded", function() {
  submit();
  document.getElementById("compare").onclick = function() {
    scroll()
  };
});

function submit() {
  var electcarcost = 159900; //159900 is the online price. for the 35000$ car you have to visit a store;
  if (document.getElementById("country").value == "usa") {
    electcarcost = 37990;
    document.getElementById("currency").innerHTML = "Please give all costs in Dollars(USD)";
  } else if (document.getElementById("country").value == "india") {
    electcarcost = 2500000; // 35,000 in INR
    document.getElementById("currency").innerHTML = "Please give all costs in Rupees(INR)";
  } else if (document.getElementById("country").value == "uae") {
    electcarcost = 159900;
    document.getElementById("currency").innerHTML = "Please give all costs in Dirhams(AED)";
  }
  var range = 410;
  var battkwh = 50;
  if (document.getElementById("fullsd").checked) {
    if (document.getElementById("country").value == "usa") {
      electcarcost += 10000;
    } else if (document.getElementById("country").value == "india") {
      electcarcost += 498841;
    } else if (document.getElementById("country").value == "uae") {
      electcarcost += 28100;
    }
  }
  var extraelectcost = parseFloat(document.getElementById("extraelectcost").value);
  if (!isNaN(extraelectcost)) {
    electcarcost += extraelectcost;
  }
  var result = "";
  var mileage = parseFloat(document.getElementById("mileage").value);
  var gascost = parseFloat(document.getElementById("gascost").value);
  var carcost = parseFloat(document.getElementById("carcost").value);
  var maintcost = parseFloat(document.getElementById("maintcost").value);
  var electcost = parseFloat(document.getElementById("electcost").value);
  var distance = (365.2422 * parseFloat(document.getElementById("distance").value));
  var years = parseFloat(document.getElementById("years").value);
  var trips = 12.17474 * parseFloat(document.getElementById("taxi").value);
  var electperyear = electcost * (distance / range) * battkwh;
  var electcartotalcost = electcarcost + (electperyear * years)
  var gasperyear = maintcost + (gascost * (distance / mileage))
  var gascartotalcost = carcost + (gasperyear * years)
  var totaltaxicost = years * ((6.5 * trips) + (2 * distance));
  if (electcartotalcost < gascartotalcost) {
    result = "TESLA WINS <br> It won by " + truncate(gascartotalcost - electcartotalcost);
  } else if (electcartotalcost > gascartotalcost) {
    result = "GAS CAR WINS and goes on to destroy earth <br> It won by " + truncate(electcartotalcost - gascartotalcost);
  }
  if (electperyear < gasperyear) {
    result += " <br> Savings per year with electric: " + (Math.trunc(100 * (gasperyear - electperyear))) / 100 + "<br>";
  } else {
    result += " <br> Savings per year with gas: " + (Math.trunc(100 * (electperyear - gasperyear))) / 100 + "<br>";
  }
  result += "<br>" + "Total Tesla Cost: " + truncate(electcartotalcost) + " <br> Total Gas Car Cost: " + truncate(gascartotalcost);
  if (!isNaN(trips)) {
    result += "<br> Using just Dubai Taxi instead would cost " + truncate(totaltaxicost)
  }
  document.getElementById("result").innerHTML = result;
  if (isNaN(mileage) || isNaN(gascost) || isNaN(carcost) || isNaN(maintcost) || isNaN(electcost) || isNaN(distance) || isNaN(years)) {
    document.getElementById("result").innerHTML = "Fill in the values and the result will be shown here";
  }
}

//SECONDARIES

var iftttkey = "iY46qstJctzVcVh1IGrAFSlTK5WHuPmakgwERnn-WnW";
var thingkey = "2N1ZM2LM6LRK6UJZ";

function end() {
  if (countview) {
    thingspeak(elapsedTime / 1000, thingkey); //convert to seconds
  }
}

if (localStorage.userIsIshanGoel !== 'yes') {
  countview = true;
} else {
  countview = false;
}

function sendfeedback() {
  var data = document.getElementById("feedtext").value;
  if (!data.match(/\S/)) {
    alert("Please write in your feedback before submitting");
  } else {
    ifttt(data, iftttkey);
    document.getElementById("feedsubmit").innerHTML = "Sent!";
    document.getElementById("feedsubmit").removeAttribute("onclick");
    document.getElementById("feedsubmit").classList.remove("feedsubmiteffects");
    document.getElementById("feedsubmit").classList.add("nohoveractive");
  }
}

function autofill() {
  window.isautofill = true; // window.foo makes foo a global variable
  if (document.getElementById("country").value == "usa") {
    var mileage = 10;
    var gascost = 2.7;
    var carcost = 37000;
    var maintcost = 1200;
    var electcost = 0.12;
    var distance = 50;
  } else if (document.getElementById("country").value == "india") {
    var mileage = 15;
    var gascost = 80;
    var carcost = 800000;
    var maintcost = 16000;
    var electcost = 6;
    var distance = 50;
  } else if (document.getElementById("country").value == "uae") {
    var mileage = 11;
    var gascost = 1.80;
    var carcost = 130000;
    var maintcost = 5000;
    var electcost = 0.23;
    var distance = 50;
  }
  document.getElementById("mileage").setAttribute("value", mileage);
  document.getElementById("gascost").setAttribute("value", gascost);
  document.getElementById("carcost").setAttribute("value", carcost);
  document.getElementById("maintcost").setAttribute("value", maintcost);
  document.getElementById("electcost").setAttribute("value", electcost);
  document.getElementById("distance").setAttribute("value", distance);
  document.getElementById("autofillbutton").innerHTML = "Remove Autofill";
  document.getElementById("autofillbutton").setAttribute("onclick", "remautofill()");
}

function remautofill() {
  window.isautofill = false;
  document.getElementById("mileage").removeAttribute("value");
  document.getElementById("gascost").removeAttribute("value");
  document.getElementById("carcost").removeAttribute("value");
  document.getElementById("maintcost").removeAttribute("value");
  document.getElementById("electcost").removeAttribute("value");
  document.getElementById("distance").removeAttribute("value");
  document.getElementById("autofillbutton").innerHTML = "Autofill Common Values";
  document.getElementById("autofillbutton").setAttribute("onclick", "autofill()");
}

function scroll() {
  document.getElementById('scroll').scrollIntoView(true);
}

function curchange() {
  if (window.isautofill) {
    autofill();
  }
  submit();
}

var animateHTML = function() {
  var elems;
  var windowHeight;

  function init() {

    elems = document.querySelectorAll('.hidden');
    windowHeight = window.innerHeight;
    addEventHandlers();
    checkPosition();
  }

  function addEventHandlers() {
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
  }

  function checkPosition() {
    for (var i = 0; i < elems.length; i++) {

      var positionFrom = elems[i].getBoundingClientRect().bottom;

      if (positionFrom - windowHeight <= 0) {
        elems[i].className = elems[i].className.replace(
          'hidden',
          'heroinner'
        );
      }

      if ((positionFrom - windowHeight > 1) || (positionFrom < 0)) {
        elems[i].className = elems[i].className.replace(
          'heroinner',
          'hidden'
        );
      }
    }
  }

  return {
    init: init
  };
};
