$(document).ready(function()
{

	$('#option12').hide();
	$('#option13').hide();
	$('#option15').hide();

	
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!
	var yyyy = today.getFullYear();

	if(dd<10) {
	    dd = '0'+dd
	} 

	if(mm<10) {
	    mm = '0'+mm
	} 

	today = mm + '/' + dd + '/' + yyyy;
	$('#configuration_date').val(today);

	$('.expand_buttons').parent().click(function(){
		value = $('.expand_buttons',this).html();
		if(value == '+')
		{
			$(this).next().slideDown(500);
			$('.expand_buttons',this).html('-');
		}
		else
		{
			$(this).next().slideUp(500);
			$('.expand_buttons',this).html('+');
		}

		 $('.dropdown-menu li a').click(function(event) {
        var option = $(event.target).text();
        $(event.target).parents('.btn-group').find('.dropdown-toggle').html(option+' <span class="caret"></span>');
    });


	});

	// $('.configure_make_options_border').click(function(){
	// 	$('.configure_make_options_border').removeClass('active');
	// 	$(this).addClass('active');
		
	// });

	function calctotalprice(){
		sum = 0;
		
		for(i = 1; i < 20; i ++)
		{
			if($('.change_table tr').eq(i).children().eq(3).text() == '')
				sum += 0;
			else
				sum += parseInt($('.change_table tr').eq(i).children().eq(3).text().replace('$',''));
		}
		$('.price_value').text('$'+sum);
	}

	$('#fireplace').click(function(){
		if($(this).hasClass('active') == true)
		{
			$(this).removeClass('active');

			if($('#option1').hasClass('active') == true)
			{
				$('.option1-first-image').show();
				$('.option1-second-image').hide();
			}

			if($('#option8').hasClass('active') == true)
			{
				$('.option8-first-image').show();
				$('.option8-second-image').hide();
			}

			if($('#option9').hasClass('active') == true)
			{
				$('.option9-first-image').show();
				$('.option9-second-image').hide();
			}
			
			
			$('.firstplace-image').hide();
			
			
		}
		else{
			$(this).addClass('active');
			$('.firstplace-image').show();

			if($('#option1').hasClass('active') == true)
			{
				$('.option1-first-image').hide();
				$('.option1-second-image').show();
			}

			if($('#option8').hasClass('active') == true)
			{
				$('.option8-first-image').hide();
				$('.option8-second-image').show();
			}

			if($('#option9').hasClass('active') == true)
			{
				$('.option9-first-image').hide();
				$('.option9-second-image').show();
			}

			code = $('span label', $(this)).eq(0).text();
			option_name = $('span label', $(this)).eq(1).text();
			price = $('span label', $(this)).eq(2).text();

			
		}
		//calctotalprice();
	});



	$('#diningroom').click(function(){
		if($(this).hasClass('active') == false)
		{
			$(this).addClass('active');
			$('#study').removeClass('active');
			$('.diningroom-image').show();
			$('.study-image').hide();

			$('.change_table tr').eq(3).children().text('');

			$('.change_table_pdf tr').eq(3).children().text('');
			code = $('span label', $(this)).eq(0).text();
			option_name = $('span label', $(this)).eq(1).text();
			price = $('span label', $(this)).eq(2).text();

		}

		else {
			$(this).removeClass('active');
			$('.diningroom-image').hide();


		}
		//calctotalprice();
	});

	$('#study').click(function(){
		if($(this).hasClass('active') == false)
		{
			$(this).addClass('active');
			$('#diningroom').removeClass('active');
			$('.study-image').show();
			$('.diningroom-image').hide();

			$('.change_table tr').eq(2).children().text('');
			$('.change_table_pdf tr').eq(2).children().text('');
			code = $('span label', $(this)).eq(0).text();
			option_name = $('span label', $(this)).eq(1).text();
			price = $('span label', $(this)).eq(2).text();

		}

		else {
			$(this).removeClass('active');
			$('.study-image').hide();

		}

		//calctotalprice();
	});

	$('#option1').click(function(){
		if($(this).hasClass('active') == false)
		{
			$(this).addClass('active');
			if($('#fireplace').hasClass('active') == true)
			{
				$('.option1-first-image').hide();
				$('.option1-second-image').show();
				$('.option1-first-image-b').hide();
				$('.option1-second-image-b').show();
			}
			else
			{
				$('.option1-first-image').show();
				$('.option1-second-image').hide();
				$('.option1-first-image-b').hide();
				$('.option1-second-image-b').show();
			}			

			code = $('span label', $(this)).eq(0).text();
			option_name = $('span label', $(this)).eq(1).text();
			price = $('span label', $(this)).eq(2).text();


			$('.change_table tr').eq(4).children().eq(0).text(code);
			$('.change_table tr').eq(4).children().eq(1).text(option_name);
			$('.change_table tr').eq(4).children().eq(2).text('This is the description of this option name it goes here.');
			$('.change_table tr').eq(4).children().eq(3).text('$'+price);

			$('.change_table_pdf tr').eq(4).children().eq(0).text(code);
			$('.change_table_pdf tr').eq(4).children().eq(1).text(option_name);
			$('.change_table_pdf tr').eq(4).children().eq(2).text('This is the description of this option name it goes here.');

		}
		else{
			$('.option1-first-image').hide();
			$('.option1-second-image').hide();
			$('.option1-first-image-b').hide();
			$('.option1-second-image-b').hide();
			$('.change_table tr').eq(4).children().text('');
			$('.change_table_pdf tr').eq(4).children().text('');
			$(this).removeClass('active');
		}
		calctotalprice();
	});

	// $('#option5').click(function(){
	// 	if($(this).hasClass('active') == true)
	// 	{
	// 		$(this).removeClass('active');
	// 		$('.option2-image').hide();

	// 		$('.change_table tr').eq(5).children().text('');
	// 		$('.change_table_pdf tr').eq(5).children().text('');
	// 	}
	// 	else{
	// 		$(this).addClass('active');
	// 		$('.option2-image').show();

	// 		code = $('span label', $(this)).eq(0).text();
	// 		option_name = $('span label', $(this)).eq(1).text();
	// 		price = $('span label', $(this)).eq(2).text();
	// 		$('.change_table tr').eq(5).children().eq(0).text(code);
	// 		$('.change_table tr').eq(5).children().eq(1).text(option_name);
	// 		$('.change_table tr').eq(5).children().eq(3).text('$'+price);
	// 		$('.change_table tr').eq(5).children().eq(2).text('This is the description of this option name it goes here.');

	// 		$('.change_table_pdf tr').eq(5).children().eq(0).text(code);
	// 		$('.change_table_pdf tr').eq(5).children().eq(1).text(option_name);
	// 		$('.change_table_pdf tr').eq(5).children().eq(2).text('This is the description of this option name it goes here.');
	// 	}
	// 	calctotalprice();
	// });

	$('#option2').click(function(){
		if($(this).hasClass('active') == true)
		{
			$(this).removeClass('active');
			$('.option2-image').hide();
			
			$('.change_table tr').eq(5).children().text('');
			$('.change_table_pdf tr').eq(5).children().text('');
		}
		else{
			$(this).addClass('active');
			$('.option2-image').show();

			code = $('span label', $(this)).eq(0).text();
			option_name = $('span label', $(this)).eq(1).text();
			price = $('span label', $(this)).eq(2).text();
			$('.change_table tr').eq(5).children().eq(0).text(code);
			$('.change_table tr').eq(5).children().eq(1).text(option_name);
			$('.change_table tr').eq(5).children().eq(2).text('This is the description of this option name it goes here.');
			$('.change_table tr').eq(5).children().eq(3).text('$'+price);

			$('.change_table_pdf tr').eq(5).children().eq(0).text(code);
			$('.change_table_pdf tr').eq(5).children().eq(1).text(option_name);
			$('.change_table_pdf tr').eq(5).children().eq(2).text('This is the description of this option name it goes here.');
			
		}
		calctotalprice();
	});

	$('#option3').click(function(){
		if($(this).hasClass('active') == true)
		{
			$(this).removeClass('active');
			$('.option3-image').hide();

			$('.change_table tr').eq(6).children().text('');
			$('.change_table_pdf tr').eq(6).children().text('');
		}
		else{
			$(this).addClass('active');
			$('.option3-image').show();

			code = $('span label', $(this)).eq(0).text();
			option_name = $('span label', $(this)).eq(1).text();
			price = $('span label', $(this)).eq(2).text();
			$('.change_table tr').eq(6).children().eq(0).text(code);
			$('.change_table tr').eq(6).children().eq(1).text(option_name);
			$('.change_table tr').eq(6).children().eq(2).text("This is the description of this option name it goes here.");
			$('.change_table tr').eq(6).children().eq(3).text('$'+price);

			$('.change_table_pdf tr').eq(6).children().eq(0).text(code);
			$('.change_table_pdf tr').eq(6).children().eq(1).text(option_name);
			$('.change_table_pdf tr').eq(6).children().eq(2).text('This is the description of this option name it goes here.');
		}
		calctotalprice();
	});


	$('#option4').click(function(){
		if($(this).hasClass('active') == false)
		{
			$(this).addClass('active');
			$('#option5').removeClass('active');
			

			$('.option4-image').show();
			$('.option5-image').hide();
			$('#option8').removeClass('active');
			$('#option9').removeClass('active');
			$('.option8-first-image').hide();
			$('.option8-second-image').hide();
			$('.option9-first-image').hide();
			$('.option9-second-image').hide();

			code = $('span label', $(this)).eq(0).text();
			option_name = $('span label', $(this)).eq(1).text();
			price = $('span label', $(this)).eq(2).text();
			$('.change_table tr').eq(7).children().eq(0).text(code);
			$('.change_table tr').eq(7).children().eq(1).text(option_name);
			$('.change_table tr').eq(7).children().eq(2).text("This is the description of this option name it goes here.");
			$('.change_table tr').eq(7).children().eq(3).text('$'+price);

			$('.change_table_pdf tr').eq(7).children().eq(0).text(code);
			$('.change_table_pdf tr').eq(7).children().eq(1).text(option_name);
			$('.change_table_pdf tr').eq(7).children().eq(2).text('This is the description of this option name it goes here.');

			$('.change_table tr').eq(8).children().text('');
			$('.change_table_pdf tr').eq(8).children().text('');

			$('.change_table tr').eq(11).children().text('');
			$('.change_table_pdf tr').eq(11).children().text('');
			$('.change_table tr').eq(12).children().text('');
			$('.change_table_pdf tr').eq(12).children().text('');
		}

		else {
			$(this).removeClass('active');
			$('.option4-image').hide();

			$('.change_table tr').eq(7).children().text('');
			$('.change_table_pdf tr').eq(7).children().text('');
		}
		calctotalprice();
	});

	$('#option5').click(function(){
		if($(this).hasClass('active') == false)
		{
			$(this).addClass('active');
			$('#option4').removeClass('active');
			

			$('.option4-image').hide();
			$('.option5-image').show();
			$('#option8').removeClass('active');
			$('#option9').removeClass('active');
			$('.option8-first-image').hide();
			$('.option8-second-image').hide();
			$('.option9-first-image').hide();
			$('.option9-second-image').hide();
			

			code = $('span label', $(this)).eq(0).text();
			option_name = $('span label', $(this)).eq(1).text();
			price = $('span label', $(this)).eq(2).text();
			$('.change_table tr').eq(8).children().eq(0).text(code);
			$('.change_table tr').eq(8).children().eq(1).text(option_name);
			$('.change_table tr').eq(8).children().eq(2).text("This is the description of this option name it goes here.");
			$('.change_table tr').eq(8).children().eq(3).text('$'+price);

			$('.change_table_pdf tr').eq(8).children().eq(0).text(code);
			$('.change_table_pdf tr').eq(8).children().eq(1).text(option_name);
			$('.change_table_pdf tr').eq(8).children().eq(2).text('This is the description of this option name it goes here.');
			
			$('.change_table tr').eq(7).children().text('');
			$('.change_table_pdf tr').eq(7).children().text('');

			$('.change_table tr').eq(11).children().text('');
			$('.change_table_pdf tr').eq(11).children().text('');
			$('.change_table tr').eq(12).children().text('');
			$('.change_table_pdf tr').eq(12).children().text('');
			
		}
		else {
			$(this).removeClass('active');
			$('.option5-image').hide();

			$('.change_table tr').eq(8).children().text('');
			$('.change_table_pdf tr').eq(8).children().text('');
		}
		calctotalprice();
	});

	$('#option6').click(function(){
		if($(this).hasClass('active') == false)
		{
			$(this).addClass('active');
			$('#option7').removeClass('active');

			
			$('.option6-image').show();
			$('.option7-image').hide();

			code = $('span label', $(this)).eq(0).text();
			option_name = $('span label', $(this)).eq(1).text();
			price = $('span label', $(this)).eq(2).text();
			$('.change_table tr').eq(9).children().eq(0).text(code);
			$('.change_table tr').eq(9).children().eq(1).text(option_name);
			$('.change_table tr').eq(9).children().eq(2).text("This is the description of this option name it goes here.");
			$('.change_table tr').eq(9).children().eq(3).text('$'+price);

			$('.change_table_pdf tr').eq(9).children().eq(0).text(code);
			$('.change_table_pdf tr').eq(9).children().eq(1).text(option_name);
			$('.change_table_pdf tr').eq(9).children().eq(2).text('This is the description of this option name it goes here.');
			
			$('.change_table tr').eq(10).children().text('');
			$('.change_table_pdf tr').eq(10).children().text('');
		}
		else {
			$(this).removeClass('active');
			$('.option6-image').hide();

			$('.change_table tr').eq(9).children().text('');
			$('.change_table_pdf tr').eq(9).children().text('');
		}
		calctotalprice();
	});

	$('#option7').click(function(){
		if($(this).hasClass('active') == false)
		{
			$(this).addClass('active');
			
			$('#option6').removeClass('active');
			

			
			$('.option6-image').hide();
			$('.option7-image').show();

			code = $('span label', $(this)).eq(0).text();
			option_name = $('span label', $(this)).eq(1).text();
			price = $('span label', $(this)).eq(2).text();
			$('.change_table tr').eq(10).children().eq(0).text(code);
			$('.change_table tr').eq(10).children().eq(1).text(option_name);
			$('.change_table tr').eq(10).children().eq(2).text("This is the description of this option name it goes here.");
			$('.change_table tr').eq(10).children().eq(3).text('$'+price);

			$('.change_table_pdf tr').eq(10).children().eq(0).text(code);
			$('.change_table_pdf tr').eq(10).children().eq(1).text(option_name);
			$('.change_table_pdf tr').eq(10).children().eq(2).text('This is the description of this option name it goes here.');
			
			$('.change_table tr').eq(9).children().text('');
			$('.change_table_pdf tr').eq(9).children().text('');
		}
		else {
			$(this).removeClass('active');
			$('.option7-image').hide();

			$('.change_table tr').eq(10).children().text('');
			$('.change_table_pdf tr').eq(10).children().text('');
		}
		calctotalprice();
	});

	$('#option8').click(function(){
		if($(this).hasClass('active') == false)
		{
			$(this).addClass('active');

			if($('#fireplace').hasClass('active') == true)
			{
				$('.option8-first-image').hide();
				$('.option8-second-image').show();
			}
			else
			{
				$('.option8-first-image').show();
				$('.option8-second-image').hide();
			}			

			$('#option4').removeClass('active');
			$('#option5').removeClass('active');
			$('.option4-image').hide();
			$('.option5-image').hide();

			code = $('span label', $(this)).eq(0).text();
			option_name = $('span label', $(this)).eq(1).text();
			price = $('span label', $(this)).eq(2).text();


			$('.change_table tr').eq(11).children().eq(0).text(code);
			$('.change_table tr').eq(11).children().eq(1).text(option_name);
			$('.change_table tr').eq(11).children().eq(2).text('This is the description of this option name it goes here.');
			$('.change_table tr').eq(11).children().eq(3).text('$'+price);

			$('.change_table_pdf tr').eq(11).children().eq(0).text(code);
			$('.change_table_pdf tr').eq(11).children().eq(1).text(option_name);
			$('.change_table_pdf tr').eq(11).children().eq(2).text('This is the description of this option name it goes here.');

			$('.change_table tr').eq(7).children().text('');
			$('.change_table_pdf tr').eq(7).children().text('');
			$('.change_table tr').eq(8).children().text('');
			$('.change_table_pdf tr').eq(8).children().text('');

		}
		else{
			$(this).removeClass('active');
			$('.option8-first-image').hide();
			$('.option8-second-image').hide();
			

			$('.change_table tr').eq(11).children().text('');
			$('.change_table_pdf tr').eq(11).children().text('');
		}
		calctotalprice();
	});

	$('#option9').click(function(){
		if($(this).hasClass('active') == false)
		{
			$(this).addClass('active');
			if($('#fireplace').hasClass('active') == true)
			{
				$('.option9-first-image').hide();
				$('.option9-second-image').show();
			}
			else
			{
				$('.option9-first-image').show();
				$('.option9-second-image').hide();
			}	

			$('#option4').removeClass('active');
			$('#option5').removeClass('active');
			$('.option4-image').hide();
			$('.option5-image').hide();		

			code = $('span label', $(this)).eq(0).text();
			option_name = $('span label', $(this)).eq(1).text();
			price = $('span label', $(this)).eq(2).text();


			$('.change_table tr').eq(12).children().eq(0).text(code);
			$('.change_table tr').eq(12).children().eq(1).text(option_name);
			$('.change_table tr').eq(12).children().eq(2).text('This is the description of this option name it goes here.');
			$('.change_table tr').eq(12).children().eq(3).text('$'+price);

			$('.change_table_pdf tr').eq(12).children().eq(0).text(code);
			$('.change_table_pdf tr').eq(12).children().eq(1).text(option_name);
			$('.change_table_pdf tr').eq(12).children().eq(2).text('This is the description of this option name it goes here.');

			$('.change_table tr').eq(7).children().text('');
			$('.change_table_pdf tr').eq(7).children().text('');
			$('.change_table tr').eq(8).children().text('');
			$('.change_table_pdf tr').eq(8).children().text('');

		}
		else{
			$('.option8-first-image').hide();
			$('.option8-second-image').hide();
			$('.option9-first-image').hide();
			$('.option9-second-image').hide();

			$('.change_table tr').eq(7).children().text('');
			$('.change_table_pdf tr').eq(7).children().text('');
			$('.change_table tr').eq(8).children().text('');
			$('.change_table_pdf tr').eq(8).children().text('');
			
			$('.change_table tr').eq(12).children().text('');
			$('.change_table_pdf tr').eq(12).children().text('');
			$(this).removeClass('active');
		}
		calctotalprice();
	});

	$('#option10').click(function(){
		if($(this).hasClass('active') == false)
		{
			$(this).addClass('active');
			$('#option11').removeClass('active');
			
			$('.option10-image').show();
			$('.option11-image').hide();

			$('#option12').hide();
			$('#option13').hide();
			$('.option12-image').hide();
			$('.option13-image').hide();
			$('#option12').removeClass('active');
			$('#option13').removeClass('active');

			$('.change_table tr').eq(15).children().text('');
			$('.change_table_pdf tr').eq(15).children().text('');

			$('.change_table tr').eq(16).children().text('');
			$('.change_table_pdf tr').eq(16).children().text('');
			
		

			code = $('span label', $(this)).eq(0).text();
			option_name = $('span label', $(this)).eq(1).text();
			price = $('span label', $(this)).eq(2).text();
			$('.change_table tr').eq(13).children().eq(0).text(code);
			$('.change_table tr').eq(13).children().eq(1).text(option_name);
			$('.change_table tr').eq(13).children().eq(2).text("This is the description of this option name it goes here.");
			$('.change_table tr').eq(13).children().eq(3).text('$'+price);

			$('.change_table_pdf tr').eq(13).children().eq(0).text(code);
			$('.change_table_pdf tr').eq(13).children().eq(1).text(option_name);
			$('.change_table_pdf tr').eq(13).children().eq(2).text('This is the description of this option name it goes here.');

			$('.change_table tr').eq(14).children().text('');
			$('.change_table_pdf tr').eq(14).children().text('');
		}
		else {
			$(this).removeClass('active');
			$('.option10-image').hide();


			$('.change_table tr').eq(13).children().text('');
			$('.change_table_pdf tr').eq(13).children().text('');

			$('.change_table tr').eq(15).children().text('');
			$('.change_table_pdf tr').eq(15).children().text('');

			$('.change_table tr').eq(16).children().text('');
			$('.change_table_pdf tr').eq(16).children().text('');


		}
		calctotalprice();
	});

	$('#option11').click(function(){
		if($(this).hasClass('active') == false)
		{
			$(this).addClass('active');
			$('#option10').removeClass('active');
			$('.option11-image').show();
			$('.option10-image').hide();

			$('#option12').show();
			$('#option13').show();



			code = $('span label', $(this)).eq(0).text();
			option_name = $('span label', $(this)).eq(1).text();
			price = $('span label', $(this)).eq(2).text();
			$('.change_table tr').eq(14).children().eq(0).text(code);
			$('.change_table tr').eq(14).children().eq(1).text(option_name);
			$('.change_table tr').eq(14).children().eq(2).text("This is the description of this option name it goes here.");
			$('.change_table tr').eq(14).children().eq(3).text('$'+price);

			$('.change_table_pdf tr').eq(14).children().eq(0).text(code);
			$('.change_table_pdf tr').eq(14).children().eq(1).text(option_name);
			$('.change_table_pdf tr').eq(14).children().eq(2).text('This is the description of this option name it goes here.');

			$('.change_table tr').eq(13).children().text('');
			$('.change_table_pdf tr').eq(13).children().text('');

			
		}
		else {
			$(this).removeClass('active');
			$('#option12').hide();
			$('#option13').hide();
			$('.option12-image').hide();
			$('.option13-image').hide();
			$('#option12').removeClass('active');
			$('#option13').removeClass('active');

			$('.option11-image').hide();
			$('.change_table tr').eq(14).children().text('');
			$('.change_table_pdf tr').eq(14).children().text('');

			$('.change_table tr').eq(15).children().text('');
			$('.change_table_pdf tr').eq(15).children().text('');

			$('.change_table tr').eq(16).children().text('');
			$('.change_table_pdf tr').eq(16).children().text('');

		}
		calctotalprice();
	});

	$('#option12').click(function(){

		if($('#option11').hasClass('active') == false)
			return;
		if($(this).hasClass('active') == true)
		{
			$(this).removeClass('active');

			$('.option12-image').hide();

			$('.change_table tr').eq(15).children().text('');
			$('.change_table_pdf tr').eq(15).children().text('');
		}
		else{
			$(this).addClass('active');
			
			$('.option12-image').show();

			code = $('span label', $(this)).eq(0).text();
			option_name = $('span label', $(this)).eq(1).text();
			price = $('span label', $(this)).eq(2).text();
			$('.change_table tr').eq(15).children().eq(0).text(code);
			$('.change_table tr').eq(15).children().eq(1).text(option_name);
			$('.change_table tr').eq(15).children().eq(2).text("This is the description of this option name it goes here.");
			$('.change_table tr').eq(15).children().eq(3).text('$'+price);

			$('.change_table_pdf tr').eq(15).children().eq(0).text(code);
			$('.change_table_pdf tr').eq(15).children().eq(1).text(option_name);
			$('.change_table_pdf tr').eq(15).children().eq(2).text('This is the description of this option name it goes here.');
		}
		calctotalprice();
	});

	$('#option13').click(function(){
		if($('#option11').hasClass('active') == false)
			return;
		if($(this).hasClass('active') == true)
		{
			$(this).removeClass('active');

			$('.option13-image').hide();

			$('.change_table tr').eq(16).children().text('');
			$('.change_table_pdf tr').eq(16).children().text('');
		}
		else{
			$(this).addClass('active');

			$('.option13-image').show();

			code = $('span label', $(this)).eq(0).text();
			option_name = $('span label', $(this)).eq(1).text();
			price = $('span label', $(this)).eq(2).text();
			$('.change_table tr').eq(16).children().eq(0).text(code);
			$('.change_table tr').eq(16).children().eq(1).text(option_name);
			$('.change_table tr').eq(16).children().eq(2).text("This is the description of this option name it goes here.");
			$('.change_table tr').eq(16).children().eq(3).text('$'+price);

			$('.change_table_pdf tr').eq(16).children().eq(0).text(code);
			$('.change_table_pdf tr').eq(16).children().eq(1).text(option_name);
			$('.change_table_pdf tr').eq(16).children().eq(2).text('This is the description of this option name it goes here.');
		}
		calctotalprice();
	});

	$('#option14').click(function(){
		if($(this).hasClass('active') == true)
		{
			$(this).removeClass('active');

			$('.option14-image').hide();
			$('.option15-image').hide();
			$('#option15').removeClass('active');
			$('#option15').hide();


			$('.change_table tr').eq(17).children().text('');
			$('.change_table_pdf tr').eq(17).children().text('');

			$(this).removeClass('active');

			$('.change_table tr').eq(18).children().text('');
			$('.change_table_pdf tr').eq(18).children().text('');
			$('.option15-image').hide();
		}
		else{
			$(this).addClass('active');

			$('.option14-image').show();
			$('#option15').show();

			code = $('span label', $(this)).eq(0).text();
			option_name = $('span label', $(this)).eq(1).text();
			price = $('span label', $(this)).eq(2).text();
			$('.change_table tr').eq(17).children().eq(0).text(code);
			$('.change_table tr').eq(17).children().eq(1).text(option_name);
			$('.change_table tr').eq(17).children().eq(2).text("This is the description of this option name it goes here.");
			$('.change_table tr').eq(17).children().eq(3).text('$'+price);

			$('.change_table_pdf tr').eq(17).children().eq(0).text(code);
			$('.change_table_pdf tr').eq(17).children().eq(1).text(option_name);
			$('.change_table_pdf tr').eq(17).children().eq(2).text('This is the description of this option name it goes here.');
		}
		calctotalprice();
	});

	$('#option15').click(function(){
		if($('#option14').hasClass('active') == false)
			return;
		if($(this).hasClass('active') == true)
		{
			$(this).removeClass('active');

			$('.change_table tr').eq(18).children().text('');
			$('.change_table_pdf tr').eq(18).children().text('');
			$('.option15-image').hide();
		}
		else{
			$(this).addClass('active');

			$('.option15-image').show();

			code = $('span label', $(this)).eq(0).text();
			option_name = $('span label', $(this)).eq(1).text();
			price = $('span label', $(this)).eq(2).text();
			$('.change_table tr').eq(18).children().eq(0).text(code);
			$('.change_table tr').eq(18).children().eq(1).text(option_name);
			$('.change_table tr').eq(18).children().eq(2).text("This is the description of this option name it goes here.");
			$('.change_table tr').eq(18).children().eq(3).text('$'+price);

			$('.change_table_pdf tr').eq(18).children().eq(0).text(code);
			$('.change_table_pdf tr').eq(18).children().eq(1).text(option_name);
			$('.change_table_pdf tr').eq(18).children().eq(2).text('This is the description of this option name it goes here.');
		}
		calctotalprice();
	});

	$('#savepdf_button').click(function(){
		// var pdf = new jsPDF('p', 'pt', 'a4');
		
		// // pdf.addHTML($("#first_pdf"), function() {

		// // 	pdf.save('out.pdf');
		// // 	var output = pdf.output("datauristring");
		// // 	alert(output);
		// // 	//pdf.output("datauri"); //This will output the PDF in a new window
		// //   });

		// pdf.fromHTML(document.getElementById('first_pdf'));

		// pdf.save('test.pdf');
		
		//window.document.write($('#pdf_content').html());
		
		//printHTML($('#pdf_content').html());

		$('#content').hide();
		$('#footer').hide();
		$('#pdf_content').show();
		$('.community_name_pdf').text($('#community').val());
		$('.property_address_pdf').text($('#property_address').val());
		$('.configuration_date_pdf').text($('#configuration_date').val());
		$('.homebuilder_rep_pdf').text($('#homebuilder_rep').val());
		$('.rep_email_pdf').text($('#homebuilder_rep_email').val());
		$('.homebuilder_name_pdf').text($('#home_builder').val());
		$('.community_pdf').text($('#community').val());
		$('.lotblock_pdf').text($('#lotblock').val());
		$('.home_model_pdf').text('Plan 50B2');
		$('.buyer1_name_pdf').text($('#buyer_name1').val());
		$('.buyer1_phone_pdf').text($('#phone_number1').val());
		$('.buyer1_email_pdf').text($('#email1').val());
		$('.buyer2_name_pdf').text($('#buyer_name2').val());
		$('.buyer2_phone_pdf').text($('#phone_number2').val());
		$('.buyer2_email_pdf').text($('#email2').val());
		$('.property_address_pdf').text($('#property_address').val());
		$('.city_st_zip_address').text($('#city_input').val()+','+$('#state_input').val()+','+$('#zip_input').val());

		window.print();
		$('#pdf_content').hide();
		$('#content').show();
		$('#footer').show();


	});

	$('#clear_options').click(function(){
		$('#fireplace').removeClass('active');
		$('#diningroom').removeClass('active');
		$('#study').removeClass('active');
		$('#option1').removeClass('active');
		$('#option5').removeClass('active');
		$('#option2').removeClass('active');
		$('#option3').removeClass('active');
		$('#option4').removeClass('active');
		$('#option5').removeClass('active');
		$('#option6').removeClass('active');
		$('#option7').removeClass('active');
		$('#option8').removeClass('active');
		$('#option9').removeClass('active');
		$('#option10').removeClass('active');
		$('#option11').removeClass('active');
		$('#option12').removeClass('active');
		$('#option13').removeClass('active');
		$('#option14').removeClass('active');
		$('#option15').removeClass('active');


		$('.firstplace-image').hide();
		$('.diningroom-image').hide();
		$('.study-image').hide();
		$('.option3-image').hide();
		$('.option1-first-image').hide();
		$('.option1-second-image').hide();
		$('.option1-first-image-b').hide();
		$('.option1-second-image-b').hide();
		$('.option2-image').hide();
		$('.option2-image').hide();
		$('.option3-image-b').hide();
		$('.option4-image').hide();
		$('.option5-image').hide();
		$('.option6-image').hide();
		$('.option7-image').hide();
		$('.option11-image').hide();
		$('.option8-first-image').hide();
		$('.option8-second-image').hide();
		$('.option12-image').hide();
		$('.option9-first-image').hide();
		$('.option9-second-image').hide();
		$('.option10-image').hide();
		$('.option11-image').hide();
		$('.option12-image').hide();
		$('.option13-image').hide();
		$('.option14-image').hide();
		$('.option15-image').hide();

		for(i = 1; i < 19; i ++){
     $('.change_table tr').eq(i).children().text('');
     $('.change_table_pdf tr').eq(i).children().text('');
}
calctotalprice();

	});

	price_right = ($(window).width() - 1140) / 2 + 9;


	$(window).scroll(function(){

        if($(window).scrollTop() > 300){
              $('#configure_second_div ul').eq(0).css('position','fixed').css('top','0');
              $('#configure_second_div ul').eq(1).css('position','fixed').css('top','50px');
              $('#price_show').css('position','fixed').css('top','85px').css('right',price_right+'px');
              $('#floor_map .tab-content').css('position','fixed').css("top", "95px");

        } else {
            $('#configure_second_div ul').eq(0).css('position','static')
            $('#configure_second_div ul').eq(1).css('position','static')
            $('#price_show').css('position','static');
            $('#floor_map .tab-content').css('position','static');
        }    
	});		
});

