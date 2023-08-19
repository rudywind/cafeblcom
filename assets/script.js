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

function calculateAgeTwo(birthDate) {
  var ageMS = Date.now() - birthDate.getTime();
  var ageDate = new Date(ageMS);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

window.onload = function() {
  var elements = document.querySelectorAll('[id="umur"]');
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var birthDateStr = element.getAttribute("lahir");
    var birthDateParts = birthDateStr.split("-");
    var birthDate = new Date(
      parseInt(birthDateParts[2]),
      parseInt(birthDateParts[1]) - 1,
      parseInt(birthDateParts[0])
    );
    var age = calculateAgeTwo(birthDate);
    element.textContent = age + " Tahun";
  }
};



var images = document.getElementsByTagName('img');
for (var i = 0; i < images.length; i++) {
  images[i].onerror = function() {
    this.onerror = null;
    this.src = 'https://1.bp.blogspot.com/-rI4UCIrwEI4/YN3nGkf0nCI/AAAAAAAAAD0/DQ6fW7eCps8NL7S0oh374KFg1MsWUf2GQCLcBGAsYHQ/s72-c/ptb-nth.png';
  };
}

var urlaffiliates = {
  "linkaff": [
  "https://shope.ee/A9oISH1uwF",
    "https://shope.ee/3puEucmV0c",
    "https://shope.ee/9UYbf25GuS",
    "https://shope.ee/6pXqU7xpBs",
    "https://shope.ee/B0wXs1Cnx",
    "https://shope.ee/6AI9gtIQz7",
    "https://shope.ee/6KbZtC08FW",
    "https://shope.ee/2VOrK8wmaO",
    "https://shope.ee/B0wXqoPVC",
    "https://shope.ee/7f6xTczvdd",
    "https://shope.ee/6KbZtArnzV",
    "https://shope.ee/2fiHWQo62U",
    "https://shope.ee/1q9AWtVL4z",
    "https://shope.ee/7AAgsgxM4f",
    "https://shope.ee/5pfJIElFDt",
    "https://shope.ee/7UnXHHNm1A",
    "https://shope.ee/7f6xTZef1K",
    "https://shope.ee/6AI9goTFlh",
    "https://shope.ee/B0wXmU1li",
    "https://shope.ee/3puEuW2ryy",
    "https://shope.ee/5Kj2hGbA1b",
    "https://shope.ee/9pBS3X6to8",
    "https://shope.ee/506CIe2t84",
    "https://shope.ee/8KMeGkHKt9",
    "https://shope.ee/7AAgsavNYo",
    "https://shope.ee/VdmwKqRS7",
    "https://shope.ee/4V9vhffbaC",
    "https://shope.ee/2L5R7fobKq",
    "https://shope.ee/4V9vheOp4T",
    "https://shope.ee/8zcL3ulHSC",
    "https://shope.ee/8Ug4SzNCLd",
    "https://shope.ee/hWLMJwlR",
    "https://shope.ee/6pXqTuKfNA",
    "https://shope.ee/6KbZsxb3ez",
    "https://shope.ee/6fEQHZHi1D",
    "https://shope.ee/10a3X8qxAi",
    "https://shope.ee/8Ug4Sv6np3",
    "https://shope.ee/6KbZsvxNpI",
    "https://shope.ee/2Am0vGirNk",
    "https://shope.ee/7zjnrz4dpx",
    "https://shope.ee/5fLt5gravD",
    "https://shope.ee/1LCtvivEg4",
    "https://shope.ee/3AeY75RqTf",
    "https://shope.ee/8pIurUt8t7",
    "https://shope.ee/9UYbeiV1CD",
    "https://shope.ee/qGdKmjvp0",
    "https://shope.ee/5APcUkCJjE",
    "https://shope.ee/99vlG5f4uO",
    "https://shope.ee/1q9AWbkvcT",
    "https://shope.ee/3KxyJMJdEU",
    "https://shope.ee/AK7ieDb2aO",
    "https://shope.ee/9zUsFbKdsM",
    "https://shope.ee/5APcUiHWbe",
    "https://shope.ee/B0wXWE4zw",
    "https://shope.ee/9UYbefAEPw",
    "https://shope.ee/30L7ui8Zuc",
    "https://shope.ee/6Uv058ZFtj",
    "https://shope.ee/5Kj2gzHHmK",
    "https://shope.ee/1q9AWXdkEC",
    "https://shope.ee/9KFBSJlCt8"
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

function launch() {
var urlaffiliates = {
  "linksaff": [
    "https://shope.ee/A9oISH1uwF",
    "https://shope.ee/3puEucmV0c",
    "https://shope.ee/9UYbf25GuS",
    "https://shope.ee/6pXqU7xpBs",
    "https://shope.ee/B0wXs1Cnx",
    "https://shope.ee/6AI9gtIQz7",
    "https://shope.ee/6KbZtC08FW",
    "https://shope.ee/2VOrK8wmaO",
    "https://shope.ee/B0wXqoPVC",
    "https://shope.ee/7f6xTczvdd",
    "https://shope.ee/6KbZtArnzV",
    "https://shope.ee/2fiHWQo62U",
    "https://shope.ee/1q9AWtVL4z",
    "https://shope.ee/7AAgsgxM4f",
    "https://shope.ee/5pfJIElFDt",
    "https://shope.ee/7UnXHHNm1A",
    "https://shope.ee/7f6xTZef1K",
    "https://shope.ee/6AI9goTFlh",
    "https://shope.ee/B0wXmU1li",
    "https://shope.ee/3puEuW2ryy",
    "https://shope.ee/5Kj2hGbA1b",
    "https://shope.ee/9pBS3X6to8",
    "https://shope.ee/506CIe2t84",
    "https://shope.ee/8KMeGkHKt9",
    "https://shope.ee/7AAgsavNYo",
    "https://shope.ee/VdmwKqRS7",
    "https://shope.ee/4V9vhffbaC",
    "https://shope.ee/2L5R7fobKq",
    "https://shope.ee/4V9vheOp4T",
    "https://shope.ee/8zcL3ulHSC",
    "https://shope.ee/8Ug4SzNCLd",
    "https://shope.ee/hWLMJwlR",
    "https://shope.ee/6pXqTuKfNA",
    "https://shope.ee/6KbZsxb3ez",
    "https://shope.ee/6fEQHZHi1D",
    "https://shope.ee/10a3X8qxAi",
    "https://shope.ee/8Ug4Sv6np3",
    "https://shope.ee/6KbZsvxNpI",
    "https://shope.ee/2Am0vGirNk",
    "https://shope.ee/7zjnrz4dpx",
    "https://shope.ee/5fLt5gravD",
    "https://shope.ee/1LCtvivEg4",
    "https://shope.ee/3AeY75RqTf",
    "https://shope.ee/8pIurUt8t7",
    "https://shope.ee/9UYbeiV1CD",
    "https://shope.ee/qGdKmjvp0",
    "https://shope.ee/5APcUkCJjE",
    "https://shope.ee/99vlG5f4uO",
    "https://shope.ee/1q9AWbkvcT",
    "https://shope.ee/3KxyJMJdEU",
    "https://shope.ee/AK7ieDb2aO",
    "https://shope.ee/9zUsFbKdsM",
    "https://shope.ee/5APcUiHWbe",
    "https://shope.ee/B0wXWE4zw",
    "https://shope.ee/9UYbefAEPw",
    "https://shope.ee/30L7ui8Zuc",
    "https://shope.ee/6Uv058ZFtj",
    "https://shope.ee/5Kj2gzHHmK",
    "https://shope.ee/1q9AWXdkEC",
    "https://shope.ee/9KFBSJlCt8"
  ]
};
  var linkaff = urlaffiliates.linkaff;
  var randomIndex = Math.floor(Math.random() * linkaff.length);
  var randomUrl = linkaff[randomIndex];

  window.open(randomUrl);
}



