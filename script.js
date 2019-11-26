window.addEventListener("load", function() {
  if (window.innerWidth > 550) {

    changeImage();
  }
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

var images = new Array()

function preload() {
  for (i = 0; i < preload.arguments.length; i++) {
    images[i] = new Image()
    images[i].src = preload.arguments[i]
  }
}
preload(
  "images/aerialburj.jpg",
  "images/fromthetop.jpg",
  "images/burj.jpg",
  "images/burjfromdown.jpg",
  "images/burjscape.jpg"
)

function end() {
  oldvisitor(elapsedTime / 1000);
  thingspeak(elapsedTime / 1000);
}

function newvisitor(datatosend) {
  let data = datatosend;

  $.ajax({
    url: "https://maker.ifttt.com/trigger/newvisitor/with/key/iY46qstJctzVcVh1IGrAFSlTK5WHuPmakgwERnn-WnW",
    type: "POST",
    data: {
      "value1": data
    },
    //complete: function(){alert("Success")}
  });
}

function oldvisitor(datatosend) {
  let data = datatosend;

  $.ajax({

    url: "https://maker.ifttt.com/trigger/oldvisitor/with/key/iY46qstJctzVcVh1IGrAFSlTK5WHuPmakgwERnn-WnW",
    type: "POST",
    data: {
      "value1": data
    },
    async: false,
    //complete: function(){alert("Success")}
  });

  console.log("executed oldvisitor");
}

function thingspeak(datatosend) {
  let data = datatosend;

  $.ajax({

    url: "https://api.thingspeak.com/update?api_key=VVAE3RM6DF2D3L95",
    type: "GET",
    data: {
      "field1": data
    },
    async: false,
    //complete: function(){alert("Success")}
  });
  console.log("EXECUTED THINGSPEAK");
}



function offline() {
  alert("You are offline, some features might not work");
}

function online() {
  alert("You are back online");
}




var now = 2

function changeImage() {

  var BackgroundImg = [
    "images/aerialburj.jpg",
    "images/fromthetop.jpg",
    "images/burj.jpg",
    "images/burjfromdown.jpg",
    "images/burjscape.jpg"
  ];

  var i = Math.floor((Math.random() * 5));

  if (now == i) {
    console.log("i was gonna load the same image like a buffoon but you my dear creator have saved me from commiting this disastrous mistake");
    changeImage();
  } else {
    now = i;
    document.body.style.backgroundImage = 'url("' + BackgroundImg[i] + '")';
  }

}


if (window.innerWidth > 550) {
  window.setInterval(changeImage, 20000);
}



function email() {

  var content = document.getElementById("mytextarea").value;
  content = content.replace(/\n/g, "%0A"); // To retain the Line breaks.
  console.log(content);
  window.open('mailto:test@example.com?subject=Your Notes From quackduck.github.io&body=' + content);
}

function download() {
  var text = document.getElementById("mytextarea").value;
  text = text.replace(/\n/g, "\r\n"); // To retain the Line breaks.
  var blob = new Blob([text], {
    type: "text/plain"
  });
  var anchor = document.createElement("a");
  anchor.download = "notes-from-quackduck.github.io.txt";
  anchor.href = window.URL.createObjectURL(blob);
  anchor.target = "_blank";
  anchor.style.display = "none"; // just to be safe!
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
}
