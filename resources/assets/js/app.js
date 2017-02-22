require('./bootstrap');

(function() {

	'use strict';

	let app = {

		current_id: null,

		init: function() {
			this.listeners();
			this.changePicture();
		},

		listeners: function() {
			$('#choose').on('click', this.changePicture.bind(this));
			$('#resize').on('click', this.resizePicture.bind(this));
		},

		changePicture: function() {
			let randomNum = Math.floor((Math.random()*10)+1);
			$('#pics').attr('src', 'img/img-' + randomNum + '.jpg');
			this.current_id = randomNum;
		},

		resizePicture: function() {
			let id = this.current_id;
			let width = $('#width').val();
			let height = $('#height').val();
			$('#pics').attr('src', '/resize/' + id + '/' + width + '/' + height);
		}
	}

	app.init();

})();