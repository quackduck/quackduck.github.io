window.addEventListener("DOMContentLoaded", function() {
  submit();
});

function submit() {
  var electcarcost = 159900; //159900 is the online price. for the 35000$ car you have to visit a store;
  if (document.getElementById("country").value == "usa") {
    electcarcost = 39990;
    document.getElementById("currency").innerHTML = "Please give all costs in Dollars(USD)";
  } else if (document.getElementById("country").value == "india") {
    electcarcost = 35000 * 71.69; // 35,000 in INR
    document.getElementById("currency").innerHTML = "Please give all costs in Rupees(INR)";
  } else if (document.getElementById("country").value == "uae") {
    electcarcost = 159900;
    document.getElementById("currency").innerHTML = "Please give all costs in Dirhams(AED)";
  }
  var range = 410;
  var battkwh = 50;
  if (document.getElementById("fullsd").checked) {

    if (document.getElementById("country").value == "usa") {
      electcarcost += 7000;
    } else if (document.getElementById("country").value == "india") {
      electcarcost += 498841;
    } else if (document.getElementById("country").value == "uae") {
      electcarcost += 24200;
    }
  }
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
    if (isNaN(trips)) {
      document.getElementById("result").innerHTML = "TESLA WINS <br> It won by " + (truncate(gascartotalcost - electcartotalcost)) + " <br> Savings per year with electric: " + (Math.trunc(100 * (gasperyear - electperyear))) / 100 + "<br>" + " <br> Total Tesla Cost: " + truncate(electcartotalcost) + " <br> Total Gas Car Cost: " + truncate(gascartotalcost);
    } else {
      document.getElementById("result").innerHTML = "TESLA WINS <br> It won by " + (truncate(gascartotalcost - electcartotalcost)) + " <br> Savings per year with electric: " + (Math.trunc(100 * (gasperyear - electperyear))) / 100 + "<br>" + "<br> Using just Dubai Taxi instead would cost " + truncate(totaltaxicost) + " AED per year" + " <br> Total Tesla Cost: " + truncate(electcartotalcost) + " <br> Total Gas Car Cost: " + truncate(gascartotalcost);
    }

  } else if (electcartotalcost == gascartotalcost) {
    if (isNaN(trips)) {
      document.getElementById("result").innerHTML = "Uhhh this is awkward. The cost is the same";
    } else {
      document.getElementById("result").innerHTML = "Uhhh this is awkward. The cost is the same" + "<br> Using just Dubai Taxi instead would cost " + totaltaxicost;
    }

  } else {
    if (isNaN(trips)) {
      document.getElementById("result").innerHTML = "GAS CAR WINS and goes on to destroy earth <br> It won by " + (truncate(electcartotalcost - gascartotalcost)) + " <br> Savings per year with electric: " + (Math.trunc(100 * (gasperyear - electperyear))) / 100 + "<br>" + " <br> Total Tesla Cost: " + truncate(electcartotalcost) + " <br> Total Gas Car Cost: " + truncate(gascartotalcost);
    } else {
      document.getElementById("result").innerHTML = "GAS CAR WINS and goes on to destroy earth <br> It won by " + (truncate(electcartotalcost - gascartotalcost)) + " <br> Savings per year with electric: " + (Math.trunc(100 * (gasperyear - electperyear))) / 100 + "<br>" + "<br> Using just Dubai Taxi instead would cost " + truncate(totaltaxicost) + " AED" + " <br> Total Tesla Cost: " + truncate(electcartotalcost) + " <br> Total Gas Car Cost: " + truncate(gascartotalcost);
    }

  }

  if (isNaN(mileage) || isNaN(gascost) || isNaN(carcost) || isNaN(maintcost) || isNaN(electcost) || isNaN(distance) || isNaN(years)) {
    document.getElementById("result").innerHTML = "Fill in the values and the result will be shown here";
  }
}



function request(datatosend) {
  let data = datatosend;
  $.ajax({
    url: "https://maker.ifttt.com/trigger/feedback/with/key/iY46qstJctzVcVh1IGrAFSlTK5WHuPmakgwERnn-WnW",
    type: "POST",
    data: {
      "value1": data
    },
  });
}

function sendfeedback() {
  var data = document.getElementById("feedtext").value;
  if (!data.match(/\S/)) {
    alert("Please write in your feedback before submitting");
  } else {
    request(data);
    document.getElementById("feedsubmit").innerHTML = "Sent!";
    document.getElementById("feedsubmit").removeAttribute("onclick");
    document.getElementById("feedsubmit").classList.remove("feedsubmithover");
    document.getElementById("feedsubmit").classList.remove("feedsubmitactive");
  }
}

function autofill() {
  if (document.getElementById("country").value == "usa") {
    var mileage = 10;
    var gascost = 2;
    var carcost = truncate(130000 / 3.67);
    var maintcost = truncate(5000 / 3.67);
    var electcost = 0.06;
    var distance = 40;
  } else if (document.getElementById("country").value == "india") {
    var mileage = 12;
    var gascost = 4 * 19.4;
    var carcost = 130000 * 19.4;
    var maintcost = 5000 * 19.4;
    var electcost = 4;
    var distance = 40;
  } else if (document.getElementById("country").value == "uae") {
    var mileage = 11;
    var gascost = 2.12;
    var carcost = 130000;
    var maintcost = 5000;
    var electcost = 0.23;
    var distance = 40;
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
  document.getElementById("mileage").removeAttribute("value");
  document.getElementById("gascost").removeAttribute("value");
  document.getElementById("carcost").removeAttribute("value");
  document.getElementById("maintcost").removeAttribute("value");
  document.getElementById("electcost").removeAttribute("value");
  document.getElementById("distance").removeAttribute("value");
  document.getElementById("autofillbutton").innerHTML = "Autofill Common Values";
  document.getElementById("autofillbutton").setAttribute("onclick", "autofill()");
}

function truncate(val) {
  if (val < 1) {
    val = (Math.trunc(100 * val) / 100)
  } else {
    val = Math.trunc(val);
  }
  return val;
}