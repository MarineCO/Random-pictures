require('./bootstrap');

(function() {

	'use strict';

	let app = {

		init: function() {
			this.listeners();
		},

		listeners: function() {
			$('#choose').on('click', this.changePicture);
		},

		changePicture: function() {
			let randomNum = Math.floor((Math.random()*10)+1);
			$('#pics').attr('src', 'img/img-' + randomNum + '.jpg');
		}
	}

	app.init();

})();