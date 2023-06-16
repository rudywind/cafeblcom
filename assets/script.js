var prinshm1 = window.location.toString();
if (prinshm1.indexOf("?m=1","?m=1") > 0) {
var clean_nprinsh = prinshm1.substring(0, prinshm1.indexOf("?m=1"));
window.history.replaceState({}, document.title, clean_nprinsh);};

$("img[src*='1.bp.blogspot.com']").attr("src", function(i, val) {
  return val.replace("1.bp.blogspot.com", "lh3.googleusercontent.com");
});

function calculateAge(birthDate) {
  var ageMS = Date.now() - birthDate.getTime();
  var ageDate = new Date(ageMS);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}
var birthDateStr = $("#lahir").text();
var birthDate = new Date(birthDateStr);
var age = calculateAge(birthDate);
$("#usia").text("("+ age + " Tahun)");


var images = document.getElementsByTagName('img');
for (var i = 0; i < images.length; i++) {
  images[i].onerror = function() {
    this.onerror = null;
    this.src = 'https://1.bp.blogspot.com/-rI4UCIrwEI4/YN3nGkf0nCI/AAAAAAAAAD0/DQ6fW7eCps8NL7S0oh374KFg1MsWUf2GQCLcBGAsYHQ/s72-c/ptb-nth.png';
  };
}

var urlaffiliates = {
  linkaff: [,"https://tokopedia.link/zNL2lju3kAb","https://tokopedia.link/N8l2cqt3kAb","https://tokopedia.link/eutLrFs3kAb","https://tokopedia.link/voYvQYr3kAb","https://tokopedia.link/wm3DIHi3kAb","https://tokopedia.link/PJa0KTp3kAb","https://tokopedia.link/Zp1FNCo3kAb","https://tokopedia.link/bGWjETn3kAb","https://tokopedia.link/kWdL1Em3kAb","https://tokopedia.link/YkjDtyl3kAb","https://tokopedia.link/qWgJluj3kAb","https://tokopedia.link/Ogg0FNh3kAb","https://tokopedia.link/UiCnqDfGhAb","https://tokopedia.link/BBsX6neGhAb","https://tokopedia.link/WCZolNcGhAb","https://tokopedia.link/6nrDMjrceAb","https://shope.ee/A9k9I1DDXe","https://shope.ee/4fR7zXfe88","https://shope.ee/8A109yxBlk","https://shope.ee/2fg3bsiSMT","https://shope.ee/503yOAqxyF","https://shope.ee/9p9E93zAe1","https://shope.ee/A9m4XgF9mt","https://shope.ee/LI8pcCjB2","https://shope.ee/3AcKCpJXYf","https://shope.ee/5KgomoStIB","https://shope.ee/9UWNkTUURW","https://shope.ee/3AcKCqAbzs","https://shope.ee/VbZ1wcMXQ","https://shope.ee/7zhZxjVXBQ","https://shope.ee/5V0Ez8sWej","https://shope.ee/10XpcsVehK","https://shope.ee/9KCxYCLvhd","https://shope.ee/7zhZxkmjGr","https://shope.ee/4V7hnKHvYA","https://s.lazada.co.id/s.kHjH8?cc","https://s.lazada.co.id/s.kHjHr?cc","https://s.lazada.co.id/s.kHjtU?cc","https://s.lazada.co.id/s.kHjJ9?cc","https://s.lazada.co.id/s.kHjr2?cc","https://s.lazada.co.id/s.kHjrk?cc","https://s.lazada.co.id/s.kHjrr?cc"]
};
var affiliates = document.getElementById('affiliates');
function autoClickAff() {
  var randomIndex = Math.floor(Math.random() * urlaffiliates.linkaff.length);
  var randomUrl = urlaffiliates.linkaff[randomIndex];    
  affiliates.setAttribute('href', randomUrl);
  affiliates.click();
}
setTimeout(autoClickAff, 10000);
