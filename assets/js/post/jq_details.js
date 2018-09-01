// jquery para la vista post
$(document).ready(function() {
	//alert('entre al jquery');
	/*$.ajax({
		url: base_url + 'post/get_post',
		type: 'post',
		dataType: 'json',
		data: {id: '2'},
		success: function(data) 
		{
			
			
		}
	});*/

	$.ajax({
		url: base_url + 'post/carga_posts',
		dataType: 'json',
		success: function(data) 
		{
			$.each(data, function(i, val) {
			console.log(i);
			$('#mis_posts').append('<option value="'+val.id+'">'+val.title+'</option>');
	     });
		}
	});

	set_campos();

	function set_campos()
	{
		var data = load_data('post/get_post', 'id: 2');
		$('#id').val(data.id);
		$('#title').val(data.title);
		$('textarea#post').val(data.post);
	}

	function load_data(controlador, parametros)
	{
		$.ajax({
			url: base_url + controlador,
			type: 'post',
			dataType: 'json',
			data: {id: '2'},
			success: function(data) 
			{
				return data;
			}
		});
	}
}); 