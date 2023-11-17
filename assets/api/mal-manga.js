$(document).ready(function() {
	const malId = $("#malMangaParam").attr("content");
	$.ajax({
		url: 'https://mdl.vercel.app/?type=manga&method=all&id=' + malId,
		method: 'GET',
		dataType: 'json',
		success: function(m) {
			var info = m.info_data.data;
			var character = m.characters_data.data;
			var picture = m.pictures_data.data;
			//INFO
			var title = info.title,
				title_english = info.title_english,
				title_japanese = info.title_japanese,
				year = info.published.prop.from.year,
				alt_title = info.titles,
				poster = info.images.jpg.image_url,
				type = info.type,
				chapters = info.chapters,
				volumes = info.volumes,
				status = info.status,
				published = info.published.string,
				synopsis = info.synopsis,
				background = info.background,
				genres = info.genres,
				themes = info.themes,
				demographics = info.demographics,
				relations = info.relations;
			var alt_title = alt_title.map(function(t) {
				return t.title;
			}).join('<span class="pemisah"></span>');
			var genres = genres.map(function(g) {
				return g.name;
			}).join('<span class="pemisah"></span>');
			var themes = themes.map(function(th) {
				return th.name;
			}).join('<span class="pemisah"></span>');
			var demographics = demographics.map(function(dm) {
				return dm.name;
			}).join('<span class="pemisah"></span>');
			var galleryHtmlBackdrop = '';
			if(Array.isArray(picture) && picture.length > 4) {
				var imagesBackdrop = picture.map(function(image) {
					return '<div class="gallery-item mt-2"><img onerror="this.onerror=null;this.src=\'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHjSra7FTHhvfnsFAwcWwS6rYiGurPfhfCsA&usqp=CAU\';" src="' + image.jpg.image_url + '" lazyload></div>';
				}).join(' ');
				galleryHtmlBackdrop = '<div class="gallery-container"><div class="gallery">' + imagesBackdrop + '</div></div>';
			}
			var CharactersHtml = '';
			if(Array.isArray(character) && character.length > 0) {
				var charactersHtml = character.map(function(item) {
					var name = item.character.name;
					var role = item.role;
					var image = item.character.images.jpg.image_url;
					return '<div class="cast-item"><img src="' + image + '" alt=""><div class="metaCast text-truncate"><div><strong>' + name + '</strong></div><small>' + (role + ' Role' || "") + '</small></div></div>';
				}).join('');
				CharactersHtml = '<h2 class="head2 mt-0">Characters</h2><div class="casts-container"><div class="casts">' + charactersHtml + '</div></div>';
			}
			var AuthorContainerHtml = '';
			if(Array.isArray(info.authors) && info.authors.length > 0) {
				var AuthorContainerHtml = info.authors.map(function(author) {
					var name = author.name;
					return '<div class="p-2 mb-2 bg-light rounded d-flex justify-content-between border"><div class="name"><strong>' + name + '</strong></div></div>';
				}).join('');
				AuthorContainerHtml = '<h2 class="head2">Authors</h2><div class="crew">' + AuthorContainerHtml + '</div>';
			}
			// EXTERNAL LINK CONDITIONS
			var AllExternalLinks = "";
			if(Array.isArray(info.external) && info.external.length > 0) {
				AllExternalLinks = info.external.map(function(exlink) {
					return '<a class="btn btn-primary btn-block me-2 text-nowrap" target="_blank" href="' + exlink.url + '">' + exlink.name + '</a>';
				}).join('');
				AllExternalLinks = '<h2 class="head2">External Information</h2><div class="externalLink mt-2">' + AllExternalLinks + '</div>';
			}
			// END EXTERNAL LINK CONDITIONS
			// RELATION CONDITIONS
			var AllRelations = "";
			if(Array.isArray(relations) && relations.length > 0) {
				AllRelations = relations.map(function(relation) {
					var relationType = '<b>' + relation.relation + '</b>';
					var entryItems = relation.entry.map(function(entry) {
						return '<div class="item"><a href="/search?q=' + entry.name + '" target="_blank">' + entry.name + ' <span class="text-secondary">(' + entry.type + ')</span></a></div>';
					}).join('');
					var entryDiv = '<div class="entry">' + entryItems + '</div>';
					return relationType + entryDiv;
				}).join('');
				AllRelations = '<h2 class="head2">Related Manga & Anime</h2><div class="relation">' + AllRelations + '</div>';
			}
			// END RELATION CONDITIONS
			var html = '<div class="mangaContainer">' +
				//INFO HEADER
				'<h1 class="mb-0">' + title + '</h1><div class="meta-detail text-secondary"><span>' + (year || "∅") + '</span> <span>' + (type || "-") + '</span> <span>' + (status || "-") + '</span></div></div>' +
				//INFO HEADER
				//GALLERY
				galleryHtmlBackdrop +
				//GALLERY
				//POSTER & DESC
				'<div class="d-flex align-items-center"><img src="' + poster + '" alt="' + title + '" class="me-2 rounded shadow tvposter border" onerror="this.onerror=null;this.src=\'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHjSra7FTHhvfnsFAwcWwS6rYiGurPfhfCsA&usqp=CAU\';"><div class="tvdescription">' + background + '</div></div>' +
				//POSTER & DESC
				//INFORMATION
				'<h2 class="head2 mt-0">Information</h2><div class="detail-info"><ul class="detail-list text-break"><li><strong>Title: </strong>' + title + '</li><li><strong>English Title: </strong>' + (title_english || "-") + '</li><li><strong>Original Title: </strong>' + (title_japanese || "-") + '</li><li><strong>Also Known As: </strong>' + (alt_title || "-") + '</li><li><strong>Type: </strong>' + (type || "-") + '</li><li><strong>Volumes: </strong>' + (volumes || "-") + '</li><li><strong>Chapters: </strong>' + (chapters || "-") + '</li><li><strong>Status: </strong>' + (status || "-") + '</li><li><strong>Published: </strong>' + (published || "-") + '</li><li><strong>Status: </strong>' + (status || "-") + '</li><li><strong>Genres: </strong>' + (genres || "-") + '</li><li><strong>Themes: </strong>' + (themes || "-") + '</li><li><strong>Demographics: </strong>' + (demographics || "-") + '</li></ul></div>' +
				//INFORMATION
				//EXTERNAL LINK
				AllExternalLinks +
				//EXTERNAL LINK
				//SYNOPSIS
				'<h2 class="head2 mt-0">Synopsis</h2><p>' + synopsis + '</p>' +
				//SYNOPSIS
				//RELATIONS
				AllRelations +
				//RELATIONS
				//CHARACTERS
				CharactersHtml +
				//CHARACTERS
				//AUTHORS
				AuthorContainerHtml +
				//AUTHORS
				'</div>';
			$('#resultMalManga').html(html);
			//END INFO
		},
		error: function(error) {
			console.error('Error:', error);
		}
	});
}); 
