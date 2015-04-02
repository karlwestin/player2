import listitem from 'components/listitem'
import { searchtracks } from 'services/searchtracks'
import searchbox from 'components/searchbox'
import { remove, renderList } from 'lib/dom';
import select from 'components/select'

export default function search(playlists, playNow) {
  var main = document.createElement("div");
  var listEl = document.createElement("div");

  var selector;
  function add(track) {
    remove(selector);

    selector = select(playlists, track, function() {
      remove(selector);
    });

    main.appendChild(selector);
  };

  var searchresitem = listitem({ 'Select List': add, 'Play Now': playNow });
  var render = renderList.bind(null, listEl, searchresitem);

  var box = searchbox(function(searchval) {
    searchtracks(searchval, render);
  });

  main.appendChild(box);
  main.appendChild(listEl);

  render([]);

  return main;
};
