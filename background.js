chrome.app.runtime.onLaunched.addListener(function() {
	chrome.app.window.create(
		'index.htm',
		{id: 'discord', height: 700, width: 1200}
	);
});
