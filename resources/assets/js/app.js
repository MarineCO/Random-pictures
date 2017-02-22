require('./bootstrap');

(function() {

	'use strict';

	let app = {

		init: function() {
			this.listeners();
		},

		listeners: function() {
			$('#choose').on('click', this.changePicture);
			$('#resize').on('click', this.resizePicture);
			$('#copy').on('click', this.copyUrl);
		},

		changePicture: function() {
			let randomNum = Math.floor((Math.random()*10)+1);
			$('#pics').attr('src', 'img/img-' + randomNum + '.jpg');
		},

		resizePicture: function() {
			console.log("resize bouton fonctionne");
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