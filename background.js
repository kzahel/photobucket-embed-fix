var pb_urls = [
  '*://*.photobucket.com/*',
  '*://photobucket.com/*'
]

var opts = { urls: pb_urls,
             types: ['image'] }
chrome.webRequest.onBeforeSendHeaders.addListener( onheaders, opts, ['requestHeaders','blocking'] )

function onheaders(info) {
  for (var hdr of info.requestHeaders) {
    if (hdr.name.toLowerCase() == 'referer') {
      var newref = 'http://photobucket.com/gallery/' + info.url + '.html'
      hdr.value = newref
    }
  }
  return { requestHeaders: info.requestHeaders }
}
