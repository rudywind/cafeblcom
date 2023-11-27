
$(document).ready(function(){
    $('#loading-overlay').fadeIn();

    function getFullYear(dateString) {
        var date = new Date(dateString);
        var year = date.getFullYear();
        return year;
    }

    function formatDate(inputDate) {
        var date = new Date(inputDate);
        var monthNames = [
            "January", "February", "March",
            "April", "May", "June", "July",
            "August", "September", "October",
            "November", "December"
        ];
        var monthName = monthNames[date.getMonth()];
        var day = date.getDate();
        var year = date.getFullYear();
        var formattedDate = monthName + " " + day + ", " + year;
        return formattedDate;
    }

    var ur = $("#mldinfo").attr("content"),
        ty = $("#mldinfo").attr("type"),
        sl = $("#mldinfo").attr("slug");
    const apiUrl = 'https://mdl.vercel.app?id=' + ur + '&type=all&slug=' + sl;

    $.ajax({
        url: apiUrl,
        type: 'GET',
        success: function(d) {
            var title = d.data.title,
                original_title = d.data.original_title,
                year = d.data.year,
                episode = d.data.episodes,
                synopsis = d.data.synopsis,
                type = d.data.type,
                media_type = d.data.media_type,
                country = d.data.country,
                language = d.data.language,
                poster = d.data.images.poster,
                released = d.data.released,
                aired_end = d.data.aired_end,
                aired_start = d.data.aired_start,
                runtime = d.data.runtime,
                certification = d.data.certification,
                status = d.data.status;
                language = d.data.language;

            if (150 < synopsis.length) var full_synopsis = '<h2 class="head2">Overview</h2><p>' + synopsis + "</p>";

            var alt_title = d.data.alt_titles.map(function(t) {
                return t;
            }).join('<span class="pemisah"></span>');

            var tayang = (type === "Movie") ?
                '<li><b>Released: </b>' + (released || "-") + '</li>' :
                '<li><b>Aired Start: </b>' + (aired_start || "-") + '</li><li><b>Aired End: </b>' + (aired_end || "-") + '</li>';

            var genres = d.data.genres;
            if (genres.length > 0) {
                var firstGenre = genres[0];
                var joinedGenres = (typeof firstGenre === "object") ?
                    genres.map(function(genreObj) {
                        return genreObj.name;
                    }).join('<span class="pemisah"></span>') :
                    genres.join('<span class="pemisah"></span>');
                var genre = joinedGenres;
            }

            var tags = d.data.tags;
            if (tags.length > 0) {
                var firstTag = tags[0];
                var joinedTags = (typeof firstTag === "object") ?
                    tags.map(function(tagObj) {
                        return tagObj.name;
                    }).join('<span class="pemisah"></span>') :
                    tags.join('<span class="pemisah"></span>');
                var keyword = joinedTags;
            }

            var sources = d.data.sources;
            var providerHtml = '';

            if (sources && sources.length > 0) {
                for (var i = 0; i < sources.length; i++) {
                    var source = sources[i];
                    var name = source.name;
                    var sourceType = source.source_type.toUpperCase();
                    var link = source.link;
                    var image = source.image;

                    // Accumulate HTML for each source
                    providerHtml += '<div class="provider_item"><a href="' + link + '" target="_blank"><div class="d-flex align-items-center bg-light rounded p-2 shadow"><div class="flex-shrink-0"><img src="' + image + '" alt="" class="rounded-circle img-thumbnail"></div><div class="flex-grow-1 ms-3"><h6 class="mt-0 mb-0 text-truncate"><strong>' + name + '</strong></h6><small class="text-secondary">' + ('(' + sourceType + ')' || "-") + '</small></div></div></a></div>';
                }

                var AllProviders = '<h2 class="head2">Where To Watch</h2><div class="watch_provider"><div class="providers">' + providerHtml + '</div></div>';
            } else {
                var AllProviders = '';
            }

            var castContainerHtml = '';

            if (Array.isArray(d.credits.cast) && d.credits.cast.length > 0) {
                var castHtml = d.credits.cast.map(function(cast) {
                    var image = cast.images ? cast.images.poster : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpkX1QgOmJYaGjFIuz9f_n1qer7tLoZ4l9uA&usqp=CAU';
                    var name = cast.name;
                    var character = cast.character_name;
                    var role = cast.role;
                    return '<div class="cast-item"><img  src="' + image + '" alt="' + name + '" onerror="this.onerror=null;this.src=\'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpkX1QgOmJYaGjFIuz9f_n1qer7tLoZ4l9uA&usqp=CAU\';"><div class="metaCast text-truncate"><strong>' + name + '</strong><br><small>' + character + '<br><span style="font-size:12px" class="text-light">' + role + '</span></small>' +
                        '</div>' +
                        '</div>';
                }).join('');
                castContainerHtml = '<h2 class="head2">Cast</h2><div class="casts-container"><div class="casts">' + castHtml + '</div></div>';
            }

            var crewContainerHtml = '';

            if (Array.isArray(d.credits.crew) && d.credits.crew.length > 0) {
                var crewHtml = d.credits.crew.map(function(crew) {
                    var name = crew.name;
                    var job = crew.job;
                    return '<div class="p-2 mb-2 bg-light rounded d-flex justify-content-between border"><div class="name"><strong>' + name + '</strong></div><div class="job text-truncate">' + job + '</div></div>';
                }).join('');
                crewContainerHtml = '<h2 class="head2">Crew</h2><div class="crew">' + crewHtml + '</div>';
            }

            var galleryHtmlBackdrop = '';

            if (Array.isArray(d.images) && d.images.length > 4) {
                var imagesBackdrop = d.images.map(function(image) {
                    return '<div class="gallery-item mt-2"><img onerror="this.onerror=null;this.src=\'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHjSra7FTHhvfnsFAwcWwS6rYiGurPfhfCsA&usqp=CAU\';" src="' + image.link + '" lazyload></div>';
                }).join(' ');

                galleryHtmlBackdrop = '<div class="gallery-container"><div class="gallery">' + imagesBackdrop + '</div></div>';
            }

            var htmlContent = '<div class="tvcontainer" itemscope itemtype="https://schema.org/TVSeries"><h1 itemprop="name" class="mt-0 mb-0 h2">' + title + ' (' + year + ')</h1><div class="meta-detail text-secondary"><span itemprop="countryOfOrigin">' + country + '</span><span itemprop="type">' + type + '</span><span itemprop="status">' + status + '</span></div>    ' + galleryHtmlBackdrop + '<div class="media d-flex align-items-center"><img itemprop="image" src="' + poster + '" alt="' + title + '" class="me-3 mr-3 rounded shadow tvposter border"><div class="media-body"><div class="tvdescription" itemprop="description">' + synopsis + '</div></div></div>' + (full_synopsis || "") + '<div class="detail-info mt-3"><h2 class="head2">Details</h2><ul class="detail-list text-break"><li><strong>Title: </strong>' + title + '</li><li><strong>Original Title: </strong>' + (original_title || "-") + '</li><li><strong>Also Known As: </strong>' + (alt_title || "-") + '</li>' + tayang + '<li><b>No. Episodes: </b>'+(episode || "-")+'</li><li><strong>Duration: </strong>' + (runtime + " Minutes" || "-") + '</li><li><b>Spoken Language: </b>'+language+'</li><li><strong>Genres: </strong>' + genre + '</li><li><strong>Tags: </strong>' + keyword + '</li><li><b>Content Rating: </b>'+certification+'</li></ul></div>' + AllProviders + '<div>' + castContainerHtml + '</div>' + crewContainerHtml + '</div>';
            $('#loading-overlay').fadeOut();
            $("#mdlresult").html(htmlContent);
        },
        error: function() {
            $('#loading-overlay').fadeOut();
            $("#mdlresult").html("Error fetching data");
        }
    });
}); 
