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

function truncate(val) {
  if (val < 1) {
    val = (Math.trunc(100 * val) / 100)
  } else {
    val = Math.trunc(val);
  }
  return val;
}

function thingspeak(data, key) {
  var text = "field1=" + data;
  var request = new XMLHttpRequest();
  request.open('POST', 'https://api.thingspeak.com/update?api_key=' + key, false);
  request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  request.send(text);
}

function ifttt(data, key) {
  var text = "value1=" + data;
  var request = new XMLHttpRequest();
  request.open('POST', 'https://maker.ifttt.com/trigger/feedback/with/key/' + key, true);
  request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  request.send(text);
}