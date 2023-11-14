
$(document).ready(function(){
    $('#loading-overlay').fadeIn();
        function formatDate(inputDate) {
    if (!inputDate || !/^\d{4}-\d{2}-\d{2}$/.test(inputDate)) {
        return '0000-00-00';
    }
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var splitDate = inputDate.split("-");
    var year = splitDate[0];
    var month = months[parseInt(splitDate[1]) - 1];
    var day = splitDate[2];
    var formattedDate = month + " " + day + "," + year;
    return formattedDate;
}

        var contentValue = $('#tmdbbaiwoveuii').attr('content');
        var typeValue = $('#tmdbbaiwoveuii').attr('type');

        $.ajax({
            url: "https://api.themoviedb.org/3/"+typeValue+"/"+contentValue+"?api_key=7e41906c1d9997570a262aa6f798c9e2&append_to_response=alternative_titles,videos,images,credits,keywords,content_ratings,reviews,external_ids",
            type: "GET",
            success: function(data) {
                var title = data.title;
                var tagline = '<small><i>'+data.tagline+'</i></small>';
                var originalTitle = data.original_title;
                var alsoKnown = data.alternative_titles.titles.map(function(altTitle) {
                    return altTitle.title;
                }).join('<span class="pemisah"></span>');
                var Genres = data.genres.map(function(genre) {
                    return genre.name;
                }).join('<span class="pemisah"></span>');
                var Keywords = data.keywords.keywords.map(function(keyword) {
                    return keyword.name;
                }).join('<span class="pemisah"></span>');
                var releaseDate = formatDate(data.release_date);
                var YearReleaseObject = new Date(data.release_date);
                var yearRelease = YearReleaseObject.getFullYear();
                var runtime = data.runtime + '&nbsp;Minutes';
                var budget = data.budget.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
                var revenue = data.revenue.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
                var overview = data.overview;
                if (overview.length > 150) {
                 var fullOverview = '<h2 class="head2">Overview</h2><p>'+overview+'</p>';      
                }
                var status = data.status;
                var countries = data.production_countries.map(function(country) {
                    return country.iso_3166_1;
                }).join('<span class="pemisah"></span>');
                var fullCountries = data.production_countries.map(function(country) {
                    return country.name;
                }).join('<span class="pemisah"></span>');
                var fullCompanies = data.production_companies.map(function(company) {
                    return company.name;
                }).join('<span class="pemisah"></span>');
                var SpokenLanguage = data.spoken_languages.map(function(language) {
                    return language.name;
                }).join('<span class="pemisah"></span>');
                
                var externalIds = data.external_ids;
                var AllExternalLinks = "";

            if (externalIds.imdb_id) {
                AllExternalLinks += '<a href="https://www.imdb.com/title/' + externalIds.imdb_id + '" target="_blank" class="imdb-btn btn btn-primary mr-2">IMDB</a><br>';
            }
            if (externalIds.wikidata_id) {
                AllExternalLinks += '<a href="https://www.wikidata.org/wiki/' + externalIds.wikidata_id + '" target="_blank" class="wikipedia-btn btn btn-primary mr-2">WIKIPEDIA</a><br>';
            }

            if (externalIds.facebook_id) {
                AllExternalLinks += '<a href="https://www.facebook.com/' + externalIds.facebook_id + '" target="_blank" class="facebook-btn btn btn-primary mr-2">FACEBOOK</a><br>';
            }

            if (externalIds.twitter_id) {
                AllExternalLinks += '<a href="https://twitter.com/' + externalIds.twitter_id + '" target="_blank" class="twitter-btn btn btn-primary mr-2">TWITTER</a><br>';
            }

            if (externalIds.instagram_id) {
                AllExternalLinks += '<a href="https://www.instagram.com/' + externalIds.instagram_id + '" target="_blank" class="instagram-btn btn btn-primary">INSTAGRAM</a><br>';
            }
            var AllLinkHtml = '<div class="externalLink mt-2">' + AllExternalLinks + '</div>';
 
                
                
                var poster = data.poster_path ? "https://www.themoviedb.org/t/p/w500" + data.poster_path : 'fallback-poster.jpg';
                var htmlTrailer = '';

                if (Array.isArray(data.videos.results)) {
                    data.videos.results.forEach(function(video) {
                        if (video.type === "Trailer" && video.site === "YouTube") {
                            var youtubeID = video.key;
                            htmlTrailer = '<div class="tvtrailer mt-2 mb-2" itemscope itemtype="https://schema.org/VideoObject">' +
                                '<iframe itemprop="trailer" class="tv-trailer-embed rounded" src="https://www.youtube.com/embed/' + youtubeID + '" title="Trailer ' + title + ' - cafebl.com" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen lazyload></iframe>' +
                                '</div>';
                        }
                    });
                }

                var galleryHtmlBackdrop = '';

                if (Array.isArray(data.images.backdrops) && data.images.backdrops.length > 4) {
                    var imagesBackdrop = data.images.backdrops.map(function(backdrop) {
                        return '<div class="gallery-item mt-2"><img onerror="this.onerror=null;this.src=\'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHjSra7FTHhvfnsFAwcWwS6rYiGurPfhfCsA&usqp=CAU\';" src="https://www.themoviedb.org/t/p/w342' + backdrop.file_path + '" lazyload></div>';
                    }).join(' ');

                    galleryHtmlBackdrop = '<div class="gallery-container"><div class="gallery">' + imagesBackdrop + '</div></div>';
                }

                var castContainerHtml = '';

                if (Array.isArray(data.credits.cast) && data.credits.cast.length > 0) {
                    var castHtml = data.credits.cast.map(function(cast) {
                        var profilePath = cast.profile_path;
                        var name = cast.name;
                        var character = cast.character;
                        return '<div class="cast-item"><img onerror="this.onerror=null;this.src=\'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpkX1QgOmJYaGjFIuz9f_n1qer7tLoZ4l9uA&usqp=CAU\';" src="https://www.themoviedb.org/t/p/w240_and_h266_face' + profilePath + '" alt="'+name+'" onerror="this.onerror=null;this.src=\'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpkX1QgOmJYaGjFIuz9f_n1qer7tLoZ4l9uA&usqp=CAU\';"><div class="metaCast text-truncate"><strong>' + name + '</strong><br><small>' + character + '</small>' +
                            '</div>' +
                        '</div>';
                    }).join('');
                    castContainerHtml = '<h2 class="head2">Cast</h2><div class="casts-container"><div class="casts">'+castHtml+'</div></div>';
                }

                var crewtContainerHtml = '';

                if (Array.isArray(data.credits.crew) && data.credits.crew.length > 0) {
                    var crewHtml = data.credits.crew.map(function(crew) {
                        var name = crew.name;
                        var job = crew.job;
                        return '<div class="p-2 mb-2 bg-light rounded d-flex justify-content-between border"><div class="name"><strong>'+name+'</strong></div><div class="job text-truncate">'+job+'</div></div>';
                    }).join('');
                    crewContainerHtml = '<h2 class="head2">Crew</h2><div class="crew">'+crewHtml+'</div>';
                }

                var html = '<div class="tvcontainer" itemscope itemtype="https://schema.org/Movie">' +
                    '<h1 itemprop="name" class="mt-0 mb-0 h2">' + (title || 'Title Not Available') + ' (' + (yearRelease || '0000') + ')</h1>'+
                    tagline +
                    '<div class="meta-detail text-secondary">' +
                    '<span itemprop="countryOfOrigin">' + (countries || 'Country Not Available') + '</span>' +
                    '<span itemprop="type">' + (status || 'Status Not Available') + '</span>' +
                    '<span itemprop="runtime">' + (runtime || 'Runtime Not Available') + '</span>' +
                    '</div>' +
                    htmlTrailer +
                    galleryHtmlBackdrop +
                    '	<div class="media d-flex align-items-center"><img itemprop="image" src="'+poster+'" alt="'+(title || 'Title Not Available')+'" class="me-3 rounded shadow tvposter border" lazyload onerror="this.onerror=null;this.src=\'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHjSra7FTHhvfnsFAwcWwS6rYiGurPfhfCsA&usqp=CAU\';"><div class="media-body"><div class="tvdescription" itemprop="description">'+(overview || 'Overview Not Available')+'</div></div></div>' +
                    (fullOverview || '') +                    
                    '	<div class="detail-info"><h2 class="head2">Details</h2><ul class="detail-list text-break"><li><strong>Title:</strong> '+(title || '-')+'</li><li><strong>Original Title:</strong> '+(originalTitle || '-')+'</li><li><strong>Also Known As: </strong>'+(alsoKnown || '-')+'</li><li><strong>Release Date: </strong>'+releaseDate+'</li><li><strong>Runtime: </strong>'+runtime+'</li><li><strong>Genres: </strong>'+(Genres || '-')+'</li><li><strong>Tags: </strong>'+(Keywords || '-')+'</li></ul>'+AllLinkHtml+'<h2 class="head2">Production</h2><ul><li><strong>Budget: </strong>'+budget+'</li><li><strong>Revenue: </strong>'+revenue+'</li><li><strong>Production Country: </strong>'+(fullCountries || '-')+'</li><li><strong>Production Companies: </strong>'+(fullCompanies || '-')+'</li><li><strong>Spoken Language: </strong>'+(SpokenLanguage || '-')+'</li></ul></div>' +
                    castContainerHtml +
                    crewContainerHtml +
                    '</div>';
                $('#loading-overlay').fadeOut();
                $('#nbaiw629292656382vanak').html(html);                
            },
            error: function() {
                $('#loading-overlay').fadeOut();
                $('#nbaiw629292656382vanak').html('Error fetching data');
            }
        });
    });
