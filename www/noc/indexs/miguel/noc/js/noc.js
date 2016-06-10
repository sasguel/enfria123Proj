

        $(document).ready(function(){
    		$('#tabla2').find('input, textarea, button, select').attr('disabled','disabled');

    		$('#radTabla1').change(function(){
                $('#tabla1').find('input, textarea, button, select').removeAttr('disabled');
                $('#tabla2').find('input, textarea, button, select').attr('disabled','disabled');
    		});

    		$('#radTabla2').change(function(){
                $('#tabla2').find('input, textarea, button, select').removeAttr('disabled');
                $('#tabla1').find('input, textarea, button, select').attr('disabled','disabled');
    		});
		});    	