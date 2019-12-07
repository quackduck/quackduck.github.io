window.addEventListener("DOMContentLoaded", function() {
  submit();

});

  function submit() {
    var mileage = parseFloat(document.getElementById("mileage").value);
    var gascost = parseFloat(document.getElementById("gascost").value);
    var carcost = parseFloat(document.getElementById("carcost").value);
    var maintcost = parseFloat(document.getElementById("maintcost").value);
    var electcost = parseFloat(document.getElementById("electcost").value);
    var distance = parseFloat(document.getElementById("distance").value);
    var years = parseFloat(document.getElementById("years").value);


    var electperyear = electcost*(distance/350)*55.5


    var electcartotalcost = 128450+(electperyear*years)



    var gasperyear = maintcost+(gascost*(distance/mileage))


    var gascartotalcost = carcost+(gasperyear*years)


    //var equalyears = mileage*(128450-carcost)/(maintcost*mileage+(gascost*distance)-(0.43104183*mileage))

    if (electcartotalcost<gascartotalcost) {
      document.getElementById("result").innerHTML= "TESLA WINS <br> It won by " + (Math.trunc(gascartotalcost-electcartotalcost)) + " AED";
    }
    else if (electcartotalcost==gascartotalcost) {
      document.getElementById("result").innerHTML= "uhhh this is awkward. the cost is the same" ;
    }

    else {
      document.getElementById("result").innerHTML= "GAS CAR WINS and goes on to destroy earth <br> It won by " + (Math.trunc(electcartotalcost-gascartotalcost)) + " AED" //<br> At " + equalyears + " years the total cost of this gas car and the Tesla is the same";
    }


    if (isNaN(mileage)||isNaN(gascost)||isNaN(carcost)||isNaN(maintcost)||isNaN(electcost)||isNaN(distance)||isNaN(years)) {
      document.getElementById("result").innerHTML= "Fill in the values and the result will be shown here";
    }




  }
