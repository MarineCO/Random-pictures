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
			$('#copy').on('click', this.copyUrl);
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
		},

		copied: function() {
			$('#copy').popup({
				popup: $('.popup.success'),
				on: 'click'
			});
		},

		notCopied: function() {
			$('#copy').popup({
				popup: $('.popup.fail'),
				on: 'click'
			});
		},

		copyUrl: function() {
			let clipboard = new Clipboard(this);
			console.log('click');
			clipboard.on('success', function(e) {
				console.log(e);
				app.copied();
			});

			clipboard.on('error', function(e) {
				console.log(e);
				app.notCopied();
			});
		}
	}

	app.init();

})();