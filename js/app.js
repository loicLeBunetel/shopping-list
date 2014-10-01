$(document).ready(function(){

	$('.add-button').click(function(e){
		e.preventDefault();
		var item = $(".add").val();
		var newItem = $("<p><input type='text' value='"+ item + "' class='item'>"
			+ '<input type="checkbox" class="checkbox"><i class="fa fa-trash-o"></i></a></p>')
		.hide();
		$('.shopping-list').append(newItem);
		newItem.fadeIn("slow");

	});

	$(".reset").click(function(e){
		e.preventDefault();
		$(".shopping-list").find("p").fadeOut('slow', function() {$(this).remove()});
	});

	$('.shopping-list').on("click", ".fa-trash-o", function(){
		$(this).parent().fadeOut("slow", function() {$(this).remove()});
	});
	
	$('.shopping-list').on("click", ".checkbox", function(){
		$(this).prev().toggleClass('linethrough', "normal");
	});
});






