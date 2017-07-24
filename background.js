const pb_urls = [
  '*://*.photobucket.com/*',
  '*://photobucket.com/*'
]
const wp_urls = [
  '*://*.wp.com/*.photobucket.com/*',
  '*://*.wp.com/photobucket.com/*'
]

const pb_opts = {
  urls: pb_urls,
  types: ['image']
}
chrome.webRequest.onBeforeSendHeaders.addListener(onheaders, pb_opts, ['requestHeaders', 'blocking'])

const wp_opts = {
  urls: wp_urls,
  types: ['image']
}
chrome.webRequest.onBeforeRequest.addListener(onrequest, wp_opts, ['blocking'])

function onheaders({ url, requestHeaders }) {
  const matches = /albums\/\w+\/(\w+)\//.exec(url);
  const refererUrl = `http://photobucket.com/gallery/user/${matches[1]}/media/`;
  const headerIndex = requestHeaders.findIndex(header => header.name.toLowerCase() === 'referer');

  if (headerIndex > -1) {
    requestHeaders[headerIndex].value = refererUrl;
  } else {
    requestHeaders.push({ name: 'referer', value: refererUrl });
  }

  return { requestHeaders }
}

function onrequest(info) {
  const re = /^.+\.wp\.com\/((?:.+\.)?photobucket\.com\/.+)/;
  return { redirectUrl: info.url.replace(re, 'https://$1') };
}
