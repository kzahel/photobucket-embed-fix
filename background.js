var pb_urls = [
  '*://*.photobucket.com/*',
  '*://photobucket.com/*'
]
var wp_urls = [
  '*://*.wp.com/*.photobucket.com/*',
  '*://*.wp.com/photobucket.com/*'
]

var pb_opts = { urls: pb_urls,
                types: ['image'] }
chrome.webRequest.onBeforeSendHeaders.addListener( onheaders, pb_opts, ['requestHeaders','blocking'] )

var wp_opts = { urls: wp_urls,
                types: ['image'] }
chrome.webRequest.onBeforeRequest.addListener( onrequest, wp_opts, ['blocking'] )

function onheaders(info) {
  for (var hdr of info.requestHeaders) {
    if (hdr.name.toLowerCase() == 'referer') {
      var newref = 'http://photobucket.com/gallery/' + info.url + '.html'
      hdr.value = newref
    }
  }
  return { requestHeaders: info.requestHeaders }
}

function onrequest(info) {
  var re = /^.+\.wp\.com\/((?:.+\.)?photobucket\.com\/.+)/;
  return { redirectUrl: info.url.replace(re, 'https://$1') };
}
