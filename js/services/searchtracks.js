
import { get } from 'lib/xhr';

var clientId = '2f321c743d86b3e9547ad87c50a2f8d7';

export default function searchtracks(phrase, callback) {
  phrase = encodeURIComponent(phrase);
  var url = `http://api.soundcloud.com/tracks?q=${phrase}&client_id=${clientId}`
  get(url, function(err, res) {
    if(err) {
      console.log('err', err);
      return;
    }

    var res = JSON.parse(res);
    callback(res);
  });
}
