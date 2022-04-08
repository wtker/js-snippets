function judgeIE() {
  var userAgent = window.navigator.userAgent.toLowerCase();
  if( userAgent.match(/(msie|MSIE)/) || userAgent.match(/(T|t)rident/) ) {
    var isIE = true;
    var ieVersion = userAgent.match(/((msie|MSIE)\s|rv:)([\d\.]+)/)[3];
    ieVersion = parseInt(ieVersion);
  } else {
    var isIE = false;
  }
}
