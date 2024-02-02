$( window ).on( "load", function() {
	setTimeout(() => {
		$('.h1-class h1').css({
			'margin-bottom': '0'
		})
	}, 1000)
	setTimeout(() => {
		$('.h2-class h2').css({
			'margin-bottom': '0'
		})
	}, 2000)
} )