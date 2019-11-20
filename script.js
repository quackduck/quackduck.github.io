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
   oldvisitor(elapsedTime/1000);
   thingspeak(elapsedTime/1000);
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
      async: false,
      //complete: function(){alert("Success")}
    });

    console.log("executed oldvisitor");
}

function thingspeak(datatosend) {
let data= datatosend;

$.ajax({

      url: "https://api.thingspeak.com/update?api_key=VVAE3RM6DF2D3L95",
      type: "GET",
      data: {"field1":data},
      async: false,
      //complete: function(){alert("Success")}
    });
    console.log("EXECUTED THINGSPEAK");
}



function offline() {
  alert ("You are offline, some features might not work");
}
function online() {
  alert ("You are back online");
}




function email() {

  var content = document.getElementById("mytextarea").value;
  console.log(content);
  window.open('mailto:test@example.com?subject=Your Notes From quackduck.github.io&body=' + content);
}

function download(){
    var text = document.getElementById("mytextarea").value;
    text = text.replace(/\n/g, "\r\n"); // To retain the Line breaks.
    var blob = new Blob([text], { type: "text/plain"});
    var anchor = document.createElement("a");
    anchor.download = "notes-from-quackduck.github.io.txt";
    anchor.href = window.URL.createObjectURL(blob);
    anchor.target ="_blank";
    anchor.style.display = "none"; // just to be safe!
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
 }
