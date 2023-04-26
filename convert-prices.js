// convert-prices.js

$(function() {
	// Click event handler for the toggle switch
	$('#toggle-currency').on('click', function() {
		// Get the current currency and toggle it
		var currency = $(this).prop('checked') ? 'USD' : 'GBP';
		// Make an AJAX request to the PHP endpoint to get the converted prices
		$.getJSON('/convert-prices.php', { currency: currency }, function(data) {
	  	// Update the prices on the page with the converted prices
		$('#plan1-price').text(data.plan1);
		$('#plan2-price').text(data.plan2);
		$('#plan3-price').text(data.plan3);
		});
	});
});
