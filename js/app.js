import searchresultitem from 'components/searchresultitem'
import tracklist from 'components/tracklist'
import searchbox from 'components/searchbox'
import searchtracks from 'services/searchtracks'

var playlists = {
  queue: []
};

(function app() {
  var addToQueue = function(item) {
    playlists.queue.push(item);
  };

  var reslistEl = document.querySelector("#tracklist");
  var searchresitem = searchresultitem(addToQueue);
  var searchreslist = tracklist(reslistEl, searchresitem);

  var box = searchbox(document.querySelector("#search"), function(searchval) {
      searchtracks(val, function(items) {
        searchreslist(items);
      });
  });
})();
