var height = 700;
var width = 1200;
chrome.app.runtime.onLaunched.addListener(function() {
	chrome.app.window.create('index.htm',	{
	  id: 'discord',
	  outerBounds: {
	    height: height,
	    width: width
	  }
	},
	function(win) {
    win.outerBounds.setPosition(
      Math.round(screen.availWidth / 2 - width / 2),
      Math.round(screen.availHeight / 2 - height / 2)
    );
	});
});
