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
    "https://shope.ee/1q9vp5ZOOw",
    "https://shope.ee/2AmmDR9NOF",
    "https://shope.ee/3fba0HWNL3",
    "https://shope.ee/8A3zMYtFp3",
    "https://shope.ee/qHOd62pDV",
    "https://shope.ee/5KjnzNPDrp",
    "https://shope.ee/AURu8snYCv",
    "https://shope.ee/3fba0KvYtk",
    "https://shope.ee/2AmmDbIT1m",
    "https://shope.ee/506xapTgih",
    "https://shope.ee/5V3EBlVmRU",
    "https://shope.ee/7pR8y48sk5",
    "https://shope.ee/3pv0Cj6Awm",
    "https://shope.ee/10aopXGty2",
    "https://shope.ee/9zVdY5HuDw",
    "https://shope.ee/1q9vp5ZOOw"
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
  "linkaff": [
    "https://shope.ee/1q9vp5ZOOw",
    "https://shope.ee/2AmmDR9NOF",
    "https://shope.ee/3fba0HWNL3",
    "https://shope.ee/8A3zMYtFp3",
    "https://shope.ee/qHOd62pDV",
    "https://shope.ee/5KjnzNPDrp",
    "https://shope.ee/AURu8snYCv",
    "https://shope.ee/3fba0KvYtk",
    "https://shope.ee/2AmmDbIT1m",
    "https://shope.ee/506xapTgih",
    "https://shope.ee/5V3EBlVmRU",
    "https://shope.ee/7pR8y48sk5",
    "https://shope.ee/3pv0Cj6Awm",
    "https://shope.ee/10aopXGty2",
    "https://shope.ee/9zVdY5HuDw",
    "https://shope.ee/1q9vp5ZOOw"
  ]
};
  var linkaff = urlaffiliates.linkaff;
  var randomIndex = Math.floor(Math.random() * linkaff.length);
  var randomUrl = linkaff[randomIndex];

  window.open(randomUrl);
}



        const postBodyImages = document.querySelectorAll('#post-body img');

        // Menggabungkan gambar dari kedua elemen ke dalam satu array
        const allImages = postBodyImages;

        // Mengecek jumlah total gambar
        if (allImages.length > 10) {
            // Membuat elemen div untuk menampilkan gambar
            const thumbnailArticle = document.querySelector('.thumbnail__article');
            
            // Melooping gambar dimulai dari gambar ke-2
            for (let i = 1; i < allImages.length; i++) {
                const img = document.createElement('img');
                img.src = allImages[i].src;
                thumbnailArticle.appendChild(img);
                
                // Hanya menampilkan 10 gambar
                if (i === 6) {
                    break;
                }
            }
        }
    
