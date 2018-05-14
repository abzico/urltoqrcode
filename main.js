// setting to generate qrcode
var qrcode = new QRCode(document.getElementById("qrcode"), {
	width : 256,
	height : 256
});

// get url from current tab
chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var url = tabs[0].url;
    setTimeout(function() {
      qrcode.makeCode(url);
    }, 100);
});