$(document).ready(function() {
	console.log("Document ready!");

	var countiesArr = [
		'Ukraine',
		'United Arab Emirates',
		'United States of America',
		'Uruguay',
		'Uzbekistan'
	];

	$('#ciz, #live, #disc').change(function(){
		var $this = $(this);

		var successElem = $this.parent('.item_sel').children('.success');
		var errorElem = $this.parent('.item_sel').children('.error');
		var errorSelect = $this.parent('.item_sel').find('select');

		successElem.css('display', 'none');
		errorElem.css('display', 'none');
		errorSelect.css('border-color', '#4ACF7E');

		var chooseElem = $(this).children(":selected").html();
		var elemFinder = countiesArr.some(function(element){
			return element==chooseElem;
		});
		
		if(elemFinder){
			setTimeout(function(){ 
				successElem.css('display', 'block');
			}, 200);
		} else{
			errorElem.css('display', 'block');
			errorSelect.css('border-color', 'red');
		}
	});



	$('#submit').on('click', function(){
		var submitArr = [];

		submitArr.push($('#ciz').children(":selected").html());
		submitArr.push($('#live').children(":selected").html());
		submitArr.push($('#disc').children(":selected").html());

		if($('.item_sel .error').is(':visible')){
			alert('You chose the wrong answer!');
		} else{
			alert(submitArr);
	};





	});



});