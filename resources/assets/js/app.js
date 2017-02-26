require('./bootstrap');

(function() {

	'use strict';

	let app = {

		current_id: 1,

		init: function() {
			this.listeners();
			$('#url').val(window.location.href + 'img/img-17.jpg');
		},

		listeners: function() {
			$('#choose').on('click', this.changePicture.bind(this));
			$('#resize').on('click', this.resizePicture.bind(this));
			$('#copy').on('click', this.copyUrl);
		},

		changePicture: function() {
			let randomNum = Math.floor((Math.random()*30)+1);
			if (randomNum === this.current_id && randomNum < 30) {
				randomNum = randomNum +1;
			} else if (randomNum === this.current_id && randomNum === 30) {
				randomNum = randomNum -1;
			}
			this.current_id = randomNum;
			let url = window.location.href + 'img/img-' + randomNum + '.jpg';
			$('#pics').attr('src', url);
			$('#url').val(url);
			$('#width').val(700);
			$('#height').val(400);
		},

		resizePicture: function() {
			let id = this.current_id;
			let width = $('#width').val();
			let height = $('#height').val();
			let url =  window.location.href + 'resize/' + id + '/' + width + '/' + height ;
			$('#pics').attr('src', url);
			$('#url').val(url);

		},

		copyUrl: function() {
			let clipboard = new Clipboard('#copy');
			clipboard.on('success', function() {
				$('#copy')
				.popup({
					content: 'Copied!',
					on: 'click'
				})
				.popup('show');
			});
		}

		
	}

	app.init();

})();