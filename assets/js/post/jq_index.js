$(document).ready(function() {
	//console.log(base_url);
	/* Act on the event */
	$.post(base_url + 'post/carga_posts', function(data) {
		var result = JSON.parse(data);
		$.each(result, function(i, val) {
			console.log(i);
			//alert([0][val.login]);
			//$('#contenedor-posts').append('<li>' + result[i].title + '</li>');	
			$('.post-cover').append('<h4><a href="' + base_url + 'post/view/' + result[i].id + '">' + result[i].title + '</a></h4>');
			if((result[i].post.length) >= 110)
	        {
	            $('.post-cover').append(result[i].post.substr(0, 110) + ' ...');
	            $('.post-cover').append('<p><a href="' + base_url + 'post/view/' + result[i].id + '">Seguir leyendo</a></p>');
	        }
	        else
	        {
	            $('.post-cover').append('<hr><p>' + result[i].post + '</p>');
	        }
			
			
		});
	
	});	
});