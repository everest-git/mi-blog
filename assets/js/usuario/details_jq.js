$(document).ready(function() {
	alert('entre al jquery');
	console.log(base_url + 'usuario/details/');
	$('#id_usuario').val('cualquier texto 2');
	
	$.ajax({
		url: base_url + 'usuario/details/',
		type: 'get',
		dataType: 'json',
		data: {id: '1'},
		success: function(data) 
		{
			console.log('success');
			$('#id_usuario').val(data.id);
			$('#login').val(data.login);
			//alert('entre a success');
		}
	});

	$('#frm_usuario').submit(function(event) {
		event.preventDefault();		/* Act on the event */
		alert($('#fecha_jquery').val());
		
	});

	alert('antes de datepicker');
	$('#fecha_jquery').datepicker();
	$('#fecha_jquery2').datepicker();
	$('#fecha_jquery3').datepicker();

	/*$.ajax({
		url: base_url + 'usuario/details/',
		type: 'get',
		dataType: 'jason',
		data: {id: '1'},
	})
	.done(function(data) {
		console.log("success");
		$('#id_usuario').val(data.id);
		$('#login').val(data.login);
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});*/
	
	

	
	
	
});