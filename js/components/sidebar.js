import listitem from 'components/listitem'
import searchbox from 'components/searchbox'
import { renderList } from 'lib/dom';
import { comp, hashToRenderable, dissoc, copy } from 'lib/functional';

export default function sidebar(playlists, showfunc, deletefunc, next) {
  var main = document.createElement("div");
  var listEl = document.createElement("div");
  function show(item) {
    showfunc(item.title);
  }

  function remove(item) {
    deletefunc(item.title);
    render();
  }

  var addBox = searchbox(function(name) {
    if(!playlists[name]) {
      playlists[name] = [];
      render();
    }
  });

  function play(item) {
    playlists.queue = copy(playlists[item.title]);
    next();
  }

  var normalList = listitem({ "Show": show, "Remove": remove, "Play List": play });
  var items = comp(hashToRenderable, dissoc.bind(null, playlists, "queue"));
  var list = renderList.bind(null, listEl, normalList);

  // 'queue' and 'search' are special items that can't be removed
  // so they have a special item with only a 'show' btn
  var specialList = listitem({ "Show": show });
  var append = function(ul) {
    ul.appendChild(specialList({ title: "queue" }));
    ul.appendChild(specialList({ title: "search" }));
  };

  var render = comp(append, list, items);
  main.appendChild(listEl);
  main.appendChild(addBox);

  render();

  return main;
}
