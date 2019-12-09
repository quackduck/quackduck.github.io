window.addEventListener("DOMContentLoaded", function() {
  submit();
});

function submit() {
  var electcarcost = 159900;
  // if (document.getElementById("electloaded").checked) {
  //   var electcarcost =  259659.89;
  //   console.log(electcarcost);
  // }
  var mileage = parseFloat(document.getElementById("mileage").value);
  var gascost = parseFloat(document.getElementById("gascost").value);
  var carcost = parseFloat(document.getElementById("carcost").value);
  var maintcost = parseFloat(document.getElementById("maintcost").value);
  var electcost = parseFloat(document.getElementById("electcost").value);
  var distance = (365.2422 * parseFloat(document.getElementById("distance").value));
  var years = parseFloat(document.getElementById("years").value);
  var electperyear = electcost * (distance / 400) * 50;
  var electcartotalcost = electcarcost + (electperyear * years)
  var gasperyear = maintcost + (gascost * (distance / mileage))
  var gascartotalcost = carcost + (gasperyear * years)
  if (electcartotalcost < gascartotalcost) {
    document.getElementById("result").innerHTML = "TESLA WINS <br> It won by " + (truncate(gascartotalcost - electcartotalcost)) + " AED";
  } else if (electcartotalcost == gascartotalcost) {
    document.getElementById("result").innerHTML = "uhhh this is awkward. the cost is the same";
  } else {
    document.getElementById("result").innerHTML = "GAS CAR WINS and goes on to destroy earth <br> It won by " + (truncate(electcartotalcost - gascartotalcost)) + " AED";
  }
  if (isNaN(mileage) || isNaN(gascost) || isNaN(carcost) || isNaN(maintcost) || isNaN(electcost) || isNaN(distance) || isNaN(years)) {
    document.getElementById("result").innerHTML = "Fill in the values and the result will be shown here";
  }
}

function truncate(val) {
  if (val < 1) {
    val = (Math.trunc(100 * val) / 100)
  } else {
    val = Math.trunc(val);
  }
  return val;
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