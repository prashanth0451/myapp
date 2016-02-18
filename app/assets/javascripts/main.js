$(document).ready(function() {
	$('.add').click(function() {
    	$('.block:last').before('<div class="block add-extra-fields margin-top"><input type="text" /><span>&nbsp; = &nbsp;</span><input type="text" /><input type="button" value="Remove" class="remove btn btn-sm btn-danger"><input type="button" value="Edit"class="btn btn-info btn-sm"></div>');
	});
	$('.optionBox').on('click','.remove',function() {
	 	$(this).parent().remove();
	});
});
