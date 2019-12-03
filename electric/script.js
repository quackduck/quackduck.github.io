function submit() {
  console.log("clicked");
  var mileage = parseFloat(document.getElementById("mileage").value);
  var gascost = parseFloat(document.getElementById("gascost").value);
  var carcost = parseFloat(document.getElementById("carcost").value);
  var maintcost = parseFloat(document.getElementById("maintcost").value);
  var electcost = parseFloat(document.getElementById("electcost").value);
  var distance = parseFloat(document.getElementById("distance").value);
  var years = parseFloat(document.getElementById("years").value);


  var electperyear = electcost*(distance/315)*55.5
  console.log("electperyear=");
  console.log(electperyear);

  var electcartotalcost = 128450+(electperyear*years)
  console.log("electcartotalcost=");
  console.log(electcartotalcost);


  var gasperyear = maintcost+(gascost*(distance/mileage))
  console.log("gasperyear=");
  console.log(gasperyear);

  var gascartotalcost = carcost*(gasperyear*years)
  console.log("gascartotalcost=");
  console.log(gascartotalcost);

  if (electcartotalcost<gascartotalcost) {
    alert("TESLA WINS")
  }
  else if (electcartotalcost==gascartotalcost) {
    alert("uhhh this is awkward. the cost is the same")
  }

  else {
    alert("tesla loses")
  }



















}
