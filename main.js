function updateWebviews() {
	var webview = document.querySelector('webview');
	webview.style.height = document.documentElement.clientHeight + 'px';
	webview.style.width = document.documentElement.clientWidth + 'px';
}

document.querySelector('webview').addEventListener('permissionrequest', function(e) {
	if (e.permission === 'media') {
		e.request.allow();
	}
});

var webview = document.querySelector('#wv1');
webview.addEventListener('newwindow', function(e) {
  window.open(e.targetUrl);
});

onload = updateWebviews;
window.onresize = updateWebviews;