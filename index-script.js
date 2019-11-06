

let startDate = new Date();
let elapsedTime = 0;
let data= 0

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

    // elapsedTime contains the time spent on page in milliseconds
};

window.addEventListener('focus', focus);
window.addEventListener('blur', blur);
window.addEventListener('beforeunload', beforeunload);

function end () {
thingspeak(elapsedTime/1000);
oldvisitor(elapsedTime/1000);
}
function newvisitor(datatosend) {
let data= datatosend;

$.ajax({
      url: "https://maker.ifttt.com/trigger/newvisitor/with/key/iY46qstJctzVcVh1IGrAFSlTK5WHuPmakgwERnn-WnW",
      type: "POST",
      data: {"value1":data},
      //complete: function(){alert("Success")}
    });
}

function oldvisitor(datatosend) {
let data= datatosend;

$.ajax({
      
      url: "https://maker.ifttt.com/trigger/oldvisitor/with/key/iY46qstJctzVcVh1IGrAFSlTK5WHuPmakgwERnn-WnW",
      type: "POST",
      data: {"value1":data},
      complete: function(){alert("Success")}
    });
}

function thingspeak(datatosend) {
let data= datatosend;

$.ajax({
      
      url: "https://api.thingspeak.com/update?api_key=VVAE3RM6DF2D3L95",
      type: "GET",
      data: {"field1":data},
      //complete: function(){alert("Success")}
    });
}



function offline() {
  alert ("You Are Offline, Some Features Might Not Work");
}
function online() {
  alert ("You are back online");
}
function myprint() {
  window.print();
}