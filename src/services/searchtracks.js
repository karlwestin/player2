define(["exports", "lib/xhr"], function (exports, _libXhr) {
  "use strict";

  exports.addId = addId;
  exports.searchtracks = searchtracks;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var get = _libXhr.get;

  var clientId = "2f321c743d86b3e9547ad87c50a2f8d7";

  function addId(url) {
    if (/\?/.test(url)) {
      return "" + url + "&client_id=" + clientId;
    }
    return "" + url + "?client_id=" + clientId;
  }

  function searchtracks(phrase, callback) {
    phrase = encodeURIComponent(phrase);
    var url = "http://api.soundcloud.com/tracks?q=" + phrase;
    url = addId(url);
    get(url, function (err, res) {
      if (err) {
        console.log("err", err);
        return;
      }

      var res = JSON.parse(res);
      callback(res);
    });
  }
});