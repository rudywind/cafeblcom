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
    

document.addEventListener("DOMContentLoaded", function() {
    const feedContainer = document.getElementById("cafebl-int-content");
    const feedNav = document.getElementById("cafebl-int-button-load-more");
    const maxResults = 12;
    let startIndex = 1;
    
    function loadContent(tag, order) {
        const url = `http://int.cafebl.com/feeds/posts/summary/${tag || ''}?alt=json-in-script&start-index=${startIndex}&max-results=${maxResults}&orderby=${order}&callback=loadContentCallback`;
        const script = document.createElement("script");
        script.src = url;
        document.head.appendChild(script);
    }

    window.loadContentCallback = function(json) {
        const entries = json.feed.entry || [];
        let contentHTML = "";

        for (const entry of entries) {
            const title = entry.title.$t;
            const summary = entry.summary ? entry.summary.$t.replace(/<br ?\/?>/ig, " ").replace(/<(.*?)>/g, "").replace(/<iframe/ig, "").substring(0, 150) : "";
            const thumbnail = entry.media$thumbnail ? entry.media$thumbnail.url.replace(/\/s[0-9]+\-c/, "/s300") : "http://2.bp.blogspot.com/-11FkySHGB5Y/TpZ6SSbsF2I/AAAAAAAAA94/zK10UaL7jgo/s1600/images.jpeg";
            const link = entry.link.find(link => link.rel === "alternate").href;

            contentHTML += `
                <div class="media mb-2 d-flex align-items-center">
                    <img class="mr-2 rounded shadow" style="object-fit: cover; width: 100px; height: 80px;" src="${thumbnail}" alt="${title}">
                    <div class="media-body">
                        <a class="text-dark" href="${link}" target="_blank" title="${title}">${title}</a> 
                    </div>                 
                </div>
            `;
        }

        feedContainer.innerHTML += contentHTML;
        startIndex += maxResults;

        if (entries.length < maxResults) {
            feedNav.innerHTML = "No more content";
        } else {
            feedNav.innerHTML = `
                <a href="#" id="load-more" class="btn btn-primary btn-sm btn-block">Load More</a>
            `;
            document.getElementById("load-more").addEventListener("click", function(event) {
                event.preventDefault();
                loadContent(null, "published");
            });
        }
    };

    loadContent(null, "published");
});
