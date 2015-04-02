
import { get } from 'lib/xhr';

var clientId = '2f321c743d86b3e9547ad87c50a2f8d7';

export function addId(url) {
  if(/\?/.test(url)) {
    return `${url}&client_id=${clientId}`
  }
  return `${url}?client_id=${clientId}`
}

export function searchtracks(phrase, callback) {
  phrase = encodeURIComponent(phrase);
  var url = `http://api.soundcloud.com/tracks?q=${phrase}`
  url = addId(url);
  get(url, function(err, res) {
    if(err) {
      console.log('err', err);
      return;
    }

    var res = JSON.parse(res);
    callback(res);
  });
}
