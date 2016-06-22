$(document).ready(function() {
	$('#loadContent').click(function() {
		$('#more-container').toggleClass('shown');
		$('#loadContent').hide();
		if($('#more-container').hasClass('shown')) {
			$('#loadContent').text('Put thoses letters back in the Envelope');
			$('#more-container').fadeIn('slow', function(){
				$('#loadContent').fadeIn('slow');
			});
		} else {
			$('#loadContent').text('Open the Letters');
			$('#more-container').fadeOut('slow', function(){
				$('#loadContent').fadeIn('slow');
			});
			
		}
		
	});
	
});