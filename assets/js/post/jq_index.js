$(document).ready(function() {
	//console.log(base_url);
	/* Act on the event */
	//console.log('entre');
	/*$.post(base_url + 'post/carga_posts', function(data) {
		var result = JSON.parse(data);
		$.each(result, function(i, val) {
			console.log(i);
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
		/*var html_to_print = '';
        $.each(result, function(i2, val2) {
			html_to_print += '<tr>';
			html_to_print += '<td>' + result[i2].id + '</td>';
			html_to_print += '<td>' + result[i2].title + '</td>';
			html_to_print += '<td>' + result[i2].friendly_url + '</td>';
			html_to_print += '<td>' + result[i2].post + '</td>';
			html_to_print += '<td>' + result[i2].creation_date + '</td>';
			html_to_print += '<td>' + result[i2].id_user + '</td>';
			html_to_print += '</tr>';
			console.log(html_to_print);
			$('#posts tbody').html(html_to_print);
		});*/
	//});	
	/*alert('llegue hasta aqui');
	var datatable = $('#posts').DataTable({
		ajax: base_url + 'post/carga_posts',
		columns: 
		[
			{datos: 'id'},
			{datos: 'title'},
			{datos: 'friendly_url'},
			{datos: 'post'},
			{datos: 'creation_date'},
			{datos: 'id_user'},

		]
	});*/

	//$('#usuarios').dataDatable();
	alert('entre');
	$.ajax({
		url: base_url + 'post/carga_posts',
		type: 'get',
		dataType: 'json',
		data: {id: '1'},
		success: function(data) 
		{
			$('#posts').DataTable({
	        "data":data,
	        "columns": [
		            { "data": "id" },
		            { "data": "title" },
		            { "data": "friendly_url" },
		            { "data": "post" },
		            { "data": "creation_date" },
		            { "data": "id_user" }
	        	]
	    	});
		}
	});

	//$('#posts').DataTable();
});