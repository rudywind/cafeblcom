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
$("#usia").text("("+ age + ")");

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
    element.textContent = age;
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
    "https://shope.ee/4fOZ49Wld3",
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
    "https://shope.ee/4fOZ49Wld3",
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


function _0x39d8(_0xab93b4,_0x1b4bc3){var _0x28991e=_0x2899();return _0x39d8=function(_0x39d831,_0x28748f){_0x39d831=_0x39d831-0x1ba;var _0x2f8e79=_0x28991e[_0x39d831];return _0x2f8e79;},_0x39d8(_0xab93b4,_0x1b4bc3);}function _0x2899(){var _0x906574=['556210abwcdH','poster','content','<div\x20>','</div><div>','ori_title','517iPGnEA','crew','year','\x22\x20style=\x22width:60px;height:80px;object-fit:cover\x22\x20class=\x22rounded\x20mr-3\x20border\x22><div\x20class=\x22media-body\x20text-break\x22><h6\x20class=\x22mt-0\x20mb-0\x20text-primary\x22>','\x22\x20style=\x22width:60px;height:80px;object-fit:cover\x22\x20class=\x22rounded\x20shadow\x20mr-3\x22><div\x20class=\x22media-body\x20text-break\x22><h6\x20class=\x22mt-0\x20mb-0\x20text-primary\x22>','\x22\x20alt=\x22','385850rFTCPZ','11660832kwSYcL','images','char','html','10417836toxZQn','</span></div></div></div>','1oglTdS','toUpperCase','</h6><div>','0000','576FCnueO','1873627Cuagvt','role','</h2>','push','GET','original_title','credits','1086685PDLBje','<h2\x20class=\x22head2\x22>','</span>\x20<span>','each','</h6><div\x20class=\x22meta-detail\x22><span>','cast','log','<div\x20class=\x22media\x20d-flex\x20align-items-center\x20mb-2\x22><img\x20src=\x22','<div\x20class=\x22d-flex\x20justify-content-between\x22><div><strong>LOADING...</strong></div><div\x20class=\x22spinner-border\x20text-primary\x22\x20role=\x22status\x22></div></div>','append','title','also_known_as','ajax','data','Error:','31720jswSVv','#people_result','</div>','type','</div><div\x20class=\x22meta-detail\x22><span>','8YpgTrA'];_0x2899=function(){return _0x906574;};return _0x2899();}(function(_0x390c4b,_0x4d834f){var _0x136580=_0x39d8,_0x8eddfe=_0x390c4b();while(!![]){try{var _0xc46f62=parseInt(_0x136580(0x1d8))/0x1*(-parseInt(_0x136580(0x1d1))/0x2)+-parseInt(_0x136580(0x1dc))/0x3*(-parseInt(_0x136580(0x1bf))/0x4)+-parseInt(_0x136580(0x1e4))/0x5+-parseInt(_0x136580(0x1d6))/0x6+parseInt(_0x136580(0x1dd))/0x7*(parseInt(_0x136580(0x1c4))/0x8)+-parseInt(_0x136580(0x1d2))/0x9+-parseInt(_0x136580(0x1c5))/0xa*(-parseInt(_0x136580(0x1cb))/0xb);if(_0xc46f62===_0x4d834f)break;else _0x8eddfe['push'](_0x8eddfe['shift']());}catch(_0x32f75e){_0x8eddfe['push'](_0x8eddfe['shift']());}}}(_0x2899,0xeae90),$(document)['ready'](function(){var _0x225d14=_0x39d8;const _0x4c41d7=$('#people_data')[_0x225d14(0x1bd)](_0x225d14(0x1c7));var _0x2d86e5=$(_0x225d14(0x1ec));$(_0x225d14(0x1c0))[_0x225d14(0x1ed)](_0x2d86e5),$[_0x225d14(0x1bc)]({'url':'https://mdl.vercel.app/?type=people&id='+_0x4c41d7,'method':_0x225d14(0x1e1),'dataType':'json','success':function(_0x356864){var _0x17d813=_0x225d14,_0xd9ebb={};$[_0x17d813(0x1e7)](_0x356864[_0x17d813(0x1e3)][_0x17d813(0x1e9)],function(_0x328d31,_0x4deb0e){var _0x12b238=_0x17d813,_0x235628=_0x4deb0e[_0x12b238(0x1ba)][_0x12b238(0x1c2)],_0x4c591e=_0x4deb0e[_0x12b238(0x1de)],_0x466edd=_0x4deb0e[_0x12b238(0x1bb)],_0x29b722=_0x4deb0e[_0x12b238(0x1ba)][_0x12b238(0x1ba)],_0x445bf3=_0x4deb0e[_0x12b238(0x1ba)][_0x12b238(0x1e2)],_0x11e207=_0x4deb0e['title']['episodes'],_0x12d453=_0x4deb0e[_0x12b238(0x1ba)]['year'],_0x2e1e3a=_0x4deb0e['title'][_0x12b238(0x1d3)][_0x12b238(0x1c6)];!_0xd9ebb[_0x235628]&&(_0xd9ebb[_0x235628]=[]),_0xd9ebb[_0x235628][_0x12b238(0x1e0)]({'role':_0x4c591e||'','char':_0x466edd||'','title':_0x29b722||'','ori_title':_0x445bf3||'','episodes':_0x11e207||'','year':_0x12d453||_0x12b238(0x1db),'poster':_0x2e1e3a});});var _0x8c9c0f='';$[_0x17d813(0x1e7)](_0xd9ebb,function(_0x5cc4ca,_0x2a8a14){var _0x4721d5=_0x17d813;_0x8c9c0f+=_0x4721d5(0x1e5)+_0x5cc4ca[_0x4721d5(0x1d9)]()+_0x4721d5(0x1df),$[_0x4721d5(0x1e7)](_0x2a8a14,function(_0x11c3a8,_0x4be062){var _0x21d19f=_0x4721d5;_0x8c9c0f+='<div\x20class=\x22media\x20d-flex\x20align-items-center\x20mb-2\x20bg-light\x20shadow-sm\x20p-2\x20border\x20rounded\x22><img\x20src=\x22'+_0x4be062[_0x21d19f(0x1c6)]+_0x21d19f(0x1d0)+_0x4be062[_0x21d19f(0x1ba)]+_0x21d19f(0x1ce)+_0x4be062['title']+_0x21d19f(0x1da)+_0x4be062[_0x21d19f(0x1d4)]+_0x21d19f(0x1c9)+_0x4be062[_0x21d19f(0x1cd)]+_0x21d19f(0x1c3)+_0x4be062[_0x21d19f(0x1de)]+'</span>\x20<span>'+_0x4be062['ori_title']+'</span></div></div></div>';});});var _0xc64705={};$[_0x17d813(0x1e7)](_0x356864[_0x17d813(0x1e3)][_0x17d813(0x1cc)],function(_0x462cca,_0x3eef44){var _0x1d5aeb=_0x17d813,_0x4b5fec=_0x3eef44[_0x1d5aeb(0x1de)],_0x46bcbe=_0x3eef44['title']['title'],_0x198c3b=_0x3eef44[_0x1d5aeb(0x1ba)][_0x1d5aeb(0x1e2)],_0x9f6bec=_0x3eef44['title'][_0x1d5aeb(0x1c2)],_0x216b90=_0x3eef44[_0x1d5aeb(0x1ba)][_0x1d5aeb(0x1cd)],_0x198f72=_0x3eef44[_0x1d5aeb(0x1ba)][_0x1d5aeb(0x1d3)][_0x1d5aeb(0x1c6)];!_0xc64705[_0x4b5fec]&&(_0xc64705[_0x4b5fec]=[]),_0xc64705[_0x4b5fec][_0x1d5aeb(0x1e0)]({'title':_0x46bcbe,'poster':_0x198f72,'ori_title':_0x198c3b||'','type':_0x9f6bec,'year':_0x216b90||_0x1d5aeb(0x1db)});});var _0x2cb4d1='';$[_0x17d813(0x1e7)](_0xc64705,function(_0x59c284,_0x15f7d9){var _0x23721c=_0x17d813;_0x2cb4d1+=_0x23721c(0x1e5)+_0x59c284[_0x23721c(0x1d9)]()+_0x23721c(0x1df),$['each'](_0x15f7d9,function(_0x3db592,_0x1130ce){var _0x4317b4=_0x23721c;_0x2cb4d1+=_0x4317b4(0x1eb)+_0x1130ce[_0x4317b4(0x1c6)]+'\x22\x20alt=\x22'+_0x1130ce[_0x4317b4(0x1ba)]+_0x4317b4(0x1cf)+_0x1130ce[_0x4317b4(0x1ba)]+_0x4317b4(0x1e8)+_0x1130ce[_0x4317b4(0x1ca)]+_0x4317b4(0x1e6)+_0x1130ce['type']+_0x4317b4(0x1e6)+_0x1130ce['year']+_0x4317b4(0x1d7);});}),$('#people_result')[_0x17d813(0x1d5)](_0x17d813(0x1c8)+_0x8c9c0f+_0x2cb4d1+_0x17d813(0x1c1));},'error':function(_0x4e2d55){var _0x1bf660=_0x225d14;console[_0x1bf660(0x1ea)](_0x1bf660(0x1be),_0x4e2d55);}});}));
