window.addEventListener("DOMContentLoaded", function() {
  submit();
  document.getElementById("compare").onclick = function() {
    scroll()
  };
  //document.getElementById("hero").style.opacity = "1";
});

let startDate = new Date();
let elapsedTime = 0;
let data = 0

const focus = function() {
  startDate = new Date();
};

const blur = function() {
  const endDate = new Date();
  const spentTime = endDate.getTime() - startDate.getTime();
  elapsedTime += spentTime;
};

const beforeunload = function() {
  const endDate = new Date();
  const spentTime = endDate.getTime() - startDate.getTime();
  elapsedTime += spentTime;


};

window.addEventListener('focus', focus);
window.addEventListener('blur', blur);
window.addEventListener('beforeunload', beforeunload);


if (localStorage.userIsIshanGoel !== 'yes') {
  countview = true;
} else {
  countview = false;
}

function end() {
  if (countview) {
    thingspeak(elapsedTime / 1000); //convert to seconds
  }
}

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
  var extraelectcost = parseFloat(document.getElementById("extraelectcost").value);
  if (!isNaN(extraelectcost)) {
    electcarcost += extraelectcost;
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
      document.getElementById("result").innerHTML = "TESLA WINS <br> It won by " + (truncate(gascartotalcost - electcartotalcost)) + " <br> Savings per year with electric: " + (Math.trunc(100 * (gasperyear - electperyear))) / 100 + "<br>" + "<br> Using just Dubai Taxi instead would cost " + truncate(totaltaxicost) + " <br> Total Tesla Cost: " + truncate(electcartotalcost) + " <br> Total Gas Car Cost: " + truncate(gascartotalcost);
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
      document.getElementById("result").innerHTML = "GAS CAR WINS and goes on to destroy earth <br> It won by " + (truncate(electcartotalcost - gascartotalcost)) + " <br> Savings per year with electric: " + (Math.trunc(100 * (gasperyear - electperyear))) / 100 + "<br>" + "<br> Using just Dubai Taxi instead would cost " + truncate(totaltaxicost) + " <br> Total Tesla Cost: " + truncate(electcartotalcost) + " <br> Total Gas Car Cost: " + truncate(gascartotalcost);
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
  window.isautofill = true; // window makes it a global variable
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
    var gascost = 2.12;
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

function truncate(val) {
  if (val < 1) {
    val = (Math.trunc(100 * val) / 100)
  } else {
    val = Math.trunc(val);
  }
  return val;
}

function scroll() {
  document.getElementById('scroll').scrollIntoView(true);
}

function curchange() {
  if (window.isautofill) {
    remautofill();
    autofill();
  }
  submit();
}

function thingspeak(datatosend) {
  let data = datatosend;

  $.ajax({

        url: "https://api.thingspeak.com/update?api_key=2N1ZM2LM6LRK6UJZ",
        type: "GET",
        data: {
          "field1": data
        },
        async: false,
      }