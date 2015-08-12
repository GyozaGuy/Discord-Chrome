chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('index.htm', {
    id: 'embedder',
    innerBounds: {width: 1000, height: 700}
  });
});