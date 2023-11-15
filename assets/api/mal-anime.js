$(document).ready(function() {
	var idValue = $('#malParam').attr('content');
	$("#more").hide();
	$('#loading-overlay').fadeIn();
	var malId = $('#mal').attr('content');
	var picturesGallery;
	$.ajax({
		url: 'https://mdl.vercel.app/?type=anime&id=' + idValue + '&method=info&',
		method: 'GET',
		dataType: 'json',
		success: function(d) {
			var title = d.info_data.data.title,
				title_japanese = d.info_data.data.title_japanese,
				title_english = d.info_data.data.title_english,
				type = d.info_data.data.type,
				source = d.info_data.data.source,
				episodes = d.info_data.data.episodes,
				status = d.info_data.data.status,
				duration = d.info_data.data.duration,
				rating = d.info_data.data.rating,
				synopsis = d.info_data.data.synopsis,
				background = d.info_data.data.background,
				season = d.info_data.data.season,
				year = d.info_data.data.year,
				poster = d.info_data.data.images.jpg.image_url,
				trailer = d.info_data.data.trailer.youtube_id,
				aired = d.info_data.data.aired.string,
				broadcast = d.info_data.data.broadcast.string;
			genres = d.info_data.data.genres,
				themes = d.info_data.data.themes,
				demographics = d.info_data.data.demographics
			producers = d.info_data.data.producers,
				licensors = d.info_data.data.licensors,
				studios = d.info_data.data.studios,
				external_data = d.external_data.data,
				streaming_data = d.streaming_data.data;
			// TRAILER CONDITIONS
			var trailerHtml = '';
			if(trailer !== null && trailer !== 0 && trailer !== "Unknown") {
				trailerHtml = '<div class="trailer_anime mt-2"><div class="ratio ratio-16x9"><iframe src="https://www.youtube.com/embed/' + trailer + '" title="YouTube video" allowfullscreen class="rounded"></iframe></div></div>';
			}
			// END TRAILER CONDITIONS
			//GENRES CONDITIONS
			var genres = genres.map(function(genre) {
				return genre.name;
			}).join('<span class="pemisah"></span>');
			//END GENRE CONDITIONS
			//THEMES CONDITIONS
			var themes = themes.map(function(theme) {
				return theme.name;
			}).join('<span class="pemisah"></span>');
			//END THEMES CONDITIONS
			//DEMOGRAPHICS CONDITIONS
			var demographics = demographics.map(function(demo) {
				return demo.name;
			}).join('<span class="pemisah"></span>');
			//END DEMOGRAPHICS CONDITIONS
			//STUDIOS CONDITIONS
			var licensors = licensors.map(function(licens) {
				return '<a target="_blank" href="' + licens.url + '">' + licens.name + '</a>';
			}).join('<span class="pemisah"></span>');
			//END STUDIOS CONDITIONS
			//STUDIOS CONDITIONS
			var studios = studios.map(function(studio) {
				return '<a target="_blank" href="' + studio.url + '">' + studio.name + '</a>';
			}).join('<span class="pemisah"></span>');
			//END STUDIOS CONDITIONS
			//EXTERNAL LINK CONDITIONS
			var AllExternalLinks = "";
			if(Array.isArray(external_data) && external_data.length > 0) {
				AllExternalLinks = external_data.map(function(exlink) {
					return '<a class="btn btn-primary btn-block me-2 text-nowrap" target="_blank" href="' + exlink.url + '">' + exlink.name + '</a>';
				}).join('');
				AllExternalLinks = '<h2 class="head2">External Information</h2><div class="externalLink mt-2">' + AllExternalLinks + '</div>';
			}
			//END EXTERNAL LINK CONDITIONS
			//STREAMING
			var AllStreamingLinks = "";
			if(Array.isArray(streaming_data) && streaming_data.length > 0) {
				AllStreamingLinks = streaming_data.map(function(stream) {
					return '<a class="btn btn-lg btn-info btn-block me-2 text-nowrap" target="_blank" href="' + stream.url + '">' + stream.name + '</a>';
				}).join('');
				AllStreamingLinks = '<h2 class="head2">Streaming Platform</h2><div class="externalLink mt-2">' + AllStreamingLinks + '</div>';
			}
			//STREAMING        
			// AJAX PICTURES
			$.ajax({
				url: 'https://mdl.vercel.app/?type=anime&id=' + idValue + '&method=pictures',
				method: "GET",
				success: function(p) {
					if(Array.isArray(p.pictures_data.data) && p.pictures_data.data.length > 4) {
						var imagesAll = p.pictures_data.data.map(function(image) {
							return '<div class="gallery-item"><img onerror="this.onerror=null;this.src=\'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHjSra7FTHhvfnsFAwcWwS6rYiGurPfhfCsA&usqp=CAU\';" src="' + image.jpg.image_url + '" lazyload></div>';
						}).join(' ');
						picturesGallery = '<div class="gallery-container mt-2"><div class="gallery">' + imagesAll + '</div></div>';
					}
					//START RESULT HTML            
					var html = '<div class="comic_anime">' +
						// DETAIL INFO
						'<h1 class="mb-0">' + title + '</h1><div class="meta-detail text-muted"><span>' + (type || "-") + '</span> <span>' + (season || "-") + ' ' + (year || "-") + '</span> <span>' + (status || "-") + '</span></div>' +
						// END DETAIL INFO
						// TRAILER
						(trailerHtml || "") +
						// END TRAILER
						// PICTURES
						(picturesGallery || "") +
						// END PICTURES
						//POSTER & DESCRIPTION
						'<div class="post-desc"><div class="media d-flex align-items-center"><img src="' + poster + '" alt="" class="tvposter me-3 rounded shadow" onerror="this.onerror=null;this.src=\'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHjSra7FTHhvfnsFAwcWwS6rYiGurPfhfCsA&usqp=CAU\';"><div class="media-body"><div class="tvdescription">' + (background || "-") + '</div></div></div></div>' +
						//END POSTER & DESCRIPTION
						//SYNOPSIS
						'<div class="anime_comic_synopsis"><h2 class="head2">Synopsis</h2><p>' + (synopsis || "-") + '</p><h2 class="head2">Background</h2><p>' + (background || "-") + '</p></div>' +
						//END SYNOPSIS
						//TITLE INFORMATION
						'<div class="detail-info mt-2"><h2 class="head2">Infomation</h2><ul><li><strong>Title: </strong>' + title + '</li><li><strong>English Title: </strong>' + (title_english || "-") + '</li><li><strong>Original Title: </strong>' + (title_japanese || "-") + '</li><li><strong>Type: </strong>' + (type || "-") + '</li><li><strong>Genres: </strong>' + genres + '</li><li><strong>Themes: </strong>' + themes + '</li><li><strong>Demographics: </strong>' + demographics + '</li><li><strong>Source: </strong>' + (source || "-") + '</li><li><strong>No. Episodes: </strong>' + (episodes || "-") + '</li><li><strong>Season: </strong>' + (season || "-") + '</li><li><strong>Released Year: </strong>' + (year || "-") + '</li><li><strong>Aired: </strong>' + (aired || "-") + '</li><li><strong>Broadcast: </strong>' + (broadcast || "-") + '</li></ul><h2 class="head2">Production</h2><ul><li><strong>Licensors: </strong>' + (licensors || "-") + '</li><li><strong>Studios: </strong>' + (studios || "-") + '</li></ul></div>' +
						//END TITLE INFORMATION
						//EXTERNAL LINK
						AllExternalLinks +
						//END EXTERNAL LINK
						//STREAMING PLATFORM
						AllStreamingLinks
						//END STREAMING PLATFROM       
					$('#characters').one("click", function() {
						fetchCharacterData(function(castContainerHtml) {
							updateResultChar(castContainerHtml);
						});
					});

					function updateResultChar(combinedHtmlChar) {
						$("#characters_result").html(combinedHtmlChar);
					}
					$('#staff').one("click", function() {
						fetchStaffData(function(staffContainerHtml) {
							updateStaffResult(staffContainerHtml);
						});
					});

					function updateStaffResult(combinedHtmlStaff) {
						$("#staff_result").html(combinedHtmlStaff);
					}
					$('#loading-overlay').fadeOut();
					$("#resultMal").html(html);
					$("#more").show();

					function fetchCharacterData(callback) {
						$.ajax({
							url: 'https://mdl.vercel.app/?type=anime&id=' + idValue + '&method=characters',
							method: "GET",
							success: function(c) {
								if(Array.isArray(c.characters_data.data) && c.characters_data.data.length > 0) {
									var characterVoiceHtml = c.characters_data.data.map(function(character) {
										var imageUrl = character.character.images.jpg.image_url;
										var name = character.character.name;
										var role = character.role;
										var voiceActors = character.voice_actors.map(function(voiceActor) {
											return voiceActor.person.name;
										}).join('<span class="pemisah"></span>');
										return `

      <div class="col-12 col-md-6 mb-2 overflow-y-auto" style="height:100px">

        <div class="d-flex align-items-top bg-light rounded">

          <div class="flex-shrink-0">

            <img src="${imageUrl}" alt="${name}" class="me-2 rounded-start" style="width:80px;height:100px;object-fit:cover" onerror="this.onerror=null;this.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHjSra7FTHhvfnsFAwcWwS6rYiGurPfhfCsA&usqp=CAU';">

          </div>

          <div class="flex-grow-1"> 

            <div class="text-primary"><strong>${name}</strong></div>               

            <div class="text-secondary">${role}</div>

            <div><strong>Voice Actors</strong>: ${voiceActors}</div>

          </div>                

        </div>

      </div>`;
									}).join('');
									var characterVoiceContainerHtml = '<div class="row">' + characterVoiceHtml + '</div>';
									callback(characterVoiceContainerHtml);
								}
							},
							error: function(error) {
								console.error("Error Ajax Kedua: " + error);
							}
						});
					}

					function fetchStaffData(callback) {
						$.ajax({
							url: 'https://mdl.vercel.app/?type=anime&id=' + idValue + '&method=staff',
							method: "GET",
							success: function(s) {
								if(Array.isArray(s.staff_data.data) && s.staff_data.data.length > 0) {
									var staffHtml = s.staff_data.data.map(function(staff) {
										var imageUrl = staff.person.images.jpg.image_url;
										var name = staff.person.name;
										var positions = staff.positions.join(', ');
										return `

      <div class="col-12 col-md-6 mb-2">

        <div class="d-flex align-items-center bg-light rounded">

          <div class="flex-shrink-0">

            <img src="${imageUrl}" alt="${name}" class="me-2 rounded-start" style="width:80px;height:100px;object-fit:cover" onerror="this.onerror=null;this.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHjSra7FTHhvfnsFAwcWwS6rYiGurPfhfCsA&usqp=CAU';">

          </div>

          <div class="flex-grow-1"> 

            <div class="text-primary"><strong>${name}</strong></div>               

            <div class="text-secondary">Job: ${positions}</div>

          </div>                

        </div>

      </div>`;
									}).join('');
									var staffContainerHtml = '<div class="row">' + staffHtml + '</div>';
									callback(staffContainerHtml);
								}
							}
						});
					}
					//END RESULT HTML            
				},
				error: function(error) {},
			});
			// END AJAX PICTURES
		},
		error: function(error) {
			console.log('Error:', error);
		}
	});
});
