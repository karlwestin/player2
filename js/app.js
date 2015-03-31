import listitem from 'components/listitem'
import searchbox from 'components/searchbox'
import select from 'components/select'
import searchtracks from 'services/searchtracks'
import { remove, renderList } from 'lib/dom';
import { comp, hashToRenderable } from 'lib/functional';

var playlists = {
  queue: []
};


var listEl = document.querySelector("#tracklist");
var sidebarEl = document.querySelector("#sidebar");
var searchEl = document.querySelector("#search")

function search() {
  var selector;
  function add(track) {
    remove(selector);

    selector = select(playlists, track, function() {
      remove(selector);
    });

    document.body.appendChild(selector);
  };

  var searchresitem = listitem(add, 'Select List');
  var render = renderList.bind(null, listEl, searchresitem);

  var box = searchbox(function(searchval) {
    searchtracks(searchval, render);
  });
  searchEl.appendChild(box);

  render([]);
};

function playlist(name) {
  var list = playlists[name];

  function remove(item) {
    var index = list.indexOf(item);
    if(index > -1) {
      list.splice(index, 1);
    }
    render();
  }

  var q = listitem(remove, 'Remove from ' + name);
  var render = renderList.bind(null, listEl, q, list);
  render();
}

function sidebar() {
  function show(item) {
    playlist(item.title);
  }

  var mi = listitem(show, "Show Playlist");

  var addBox = searchbox(function(name) {
    if(!playlists[name]) {
      playlists[name] = [];
      render();
    }
  });

  var items = hashToRenderable.bind(null, playlists);
  var list = renderList.bind(null, sidebarEl, mi);
  var append = sidebarEl.appendChild.bind(sidebarEl, addBox);
  var render = comp(append, list, items);

  render();
}

// behövs egentligen bara
// Sidebar -
//  Ta bort playlist
//    - Searchresultitem ska få veta att en playlist försvann
//    - Om den playlisten visas, ta bort och visa queue istället
//  Listitem
//    - "Play Now" button - lägger först i queue och stegar fram
//    - "Play List" - tar bort hela queuen och ersätter med list
//
// - en player component

search();
sidebar();
