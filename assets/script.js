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
  "linkaff": [
    "https://tokopedia.link/caz8v3Tc0Ab",
"https://tokopedia.link/6WiaXmTc0Ab",
"https://tokopedia.link/ON96jJSc0Ab",
"https://tokopedia.link/xVATPyRc0Ab",
"https://tokopedia.link/D1lajUNc0Ab",
    "https://s.lazada.co.id/s.PwIkF?cc",
    "https://s.lazada.co.id/s.PwIkd?cc",
    "https://s.lazada.co.id/s.PwIQs?cc",
    "https://shope.ee/6zpjwWlI2r",
    "https://shope.ee/8UeXjE3GM7",
    "https://shope.ee/AK6Bua9gEz",
    "https://shope.ee/7f5QjftVDp",
    "https://shope.ee/3VFrlyNqQ0",
    "https://shope.ee/9UX4uvKU4b",
    "https://shope.ee/9eqV7DFqzr",
    "https://shope.ee/4V8OxiDapp",
    "https://shope.ee/LIq03GOSe",
    "https://shope.ee/7ziH88R8jK",
    "https://shope.ee/9KDeia4KN0",
    "https://shope.ee/3Ad1NF1PBg",
    "https://shope.ee/7pOqvnOFdv",
    "https://shope.ee/6pWJjxASXJ",
    "https://shope.ee/8UeXj0i2zS",
    "https://shope.ee/3psiAQZLUg",
    "https://shope.ee/6Ka3913lFT",
    "https://shope.ee/3fZHy6s3Ga",
    "https://shope.ee/3VFrlnSDeJ",
    "https://shope.ee/6Ka38zvVFU",
    "https://shope.ee/1ArwzUohm4",
    "https://shope.ee/1VUnO6RZi6",
    "https://shope.ee/7f5QjQmV4X",
    "https://shope.ee/6zpjwCXRI1",
    "https://shope.ee/fzbKgHZs",
    "https://shope.ee/9UX4umbSLZ",
    "https://shope.ee/8pHO7YMKJ7",
    "https://shope.ee/1LBNBlFkWn",
    "https://shope.ee/6Ka38wWJgl",
    "https://shope.ee/3Ad1N7Qlz3",
    "https://shope.ee/10YWn8HQFU",
    "https://shope.ee/6pWJjqZHln",
    "https://shope.ee/6UtTLEIxJB",
    "https://shope.ee/1VUnO2KBXO",
    "https://shope.ee/3Ad1N5ruVM",
    "https://shope.ee/9p9vJLB06u",
    "https://shope.ee/8zaoJns6cr",
    "https://shope.ee/5AO5kkkdEJ",
    "https://shope.ee/6fCtXVNOJk",
    "https://shope.ee/A9mlhvsOp7",
    "https://shope.ee/2fgkm8z5eb",
    "https://shope.ee/1ArwzNijWo",
    "https://shope.ee/6Ka38ryjbf",
    "https://shope.ee/4plFM6iJDP",
    "https://shope.ee/7KSaKeiwMa"
  ]
};
var affiliates = document.getElementById('affiliates');
function autoClickAff() {
  var randomIndex = Math.floor(Math.random() * urlaffiliates.linkaff.length);
  var randomUrl = urlaffiliates.linkaff[randomIndex];    
  affiliates.setAttribute('href', randomUrl);
  affiliates.click();
}
setTimeout(autoClickAff, 10000);
