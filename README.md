# Update Jul 9 2017

Photobucket has made an update to their referer checking code so that this extension no longer works in the current form.
Pull requests welcome.

Notes for maybe how to fix:

Setting referer to: `'http://photobucket.com/gallery/' + info.url + '.html'` used to work

Now it needs to be: `http://photobucket.com/gallery/user/xr650r5/media/cGF0aDovSU1HXzAwMDQtMjkuanBn/?ref=`

To get that opaque string `cGF0aDovSU1HXzAwMDQtMjkuanBn` you need to actually get the redirect URL when you visit the image URL without a referer header.

Accepting pull requests!

# Photobucket Embed Fix

Also Available in Chrome Web Store: https://chrome.google.com/webstore/detail/photobucket-embed-fix/naolkcpnnlofnnghnmfegnfnflicjjgj

## NOTE: You may need to clear your browser cache (at least for images) before you will be able to see some images (if you already tried to view them before installing this)

Photobucket recently updated their TOS to disable third party embedding unless the user who owns the photos pays $299.

# TL;DR;

If you're tired of seeing this image across the web:

![image](https://raw.githubusercontent.com/kzahel/photobucket-embed-fix/master/images/bwe.png)

[Install the extension](https://chrome.google.com/webstore/detail/photobucket-embed-fix/naolkcpnnlofnnghnmfegnfnflicjjgj), and you should see the actual image.

--

[Example page](http://advrider.com/index.php?threads/the-crf250l-owners-thread.823409/page-5#post-19552274) (to see some affected embeds)

[Example photobucket+wordpress page](https://treefool.com/)

--

MIT License
