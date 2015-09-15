chrome.app.runtime.onLaunched.addListener(function() {
	chrome.app.window.create('index.htm', {
		bounds: {
			height: 700,
			width: 1200
		},
		id: 'discord'
	});
});
