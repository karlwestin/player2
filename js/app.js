import listitem from 'components/listitem'
import tracklist from 'components/tracklist'
import searchbox from 'components/searchbox'
import searchtracks from 'services/searchtracks'
import { clear } from 'lib/dom';

var playlists = {
  queue: []
};

function renderList(element, item, list) {
  var el = tracklist(list, item);
  clear(element);
  element.appendChild(el);
}

var listEl = document.querySelector("#tracklist");
var sidebarEl = document.querySelector("#sidebar");

function search() {
  function add(item) {
    playlists.queue.push(item);
    console.log('playlist is', playlists.queue);
  };

  var searchresitem = listitem(addToQueue, 'Add to Queue');
  var render = renderList.bind(null, listEl, searchresitem);

  var box = searchbox(document.querySelector("#search"), function(searchval) {
    searchtracks(searchval, render);
  });

  render([]);
};

function playlist(name) {
  function remove(item) {
    var index = list.indexOf(item);
    if(index > -1) {
      list.splice(index, 1);
    }
    render(list);
  }

  var q = listitem(remove, 'Remove from ' + name);
  var render = renderList.bind(null, listEl, q);

  var list = playlists[name];
  render(list);
}

function sidebar() {
  function show(item) {
    playlist(item.title);
  }

  var mi = listitem(show, "Show Playlist");
  var render = renderList.bind(null, sidebarEl, mi);

  var items = Object.keys(playlists).map(function(el) {
    return { title: el };
  });
  render(items);
}

// behövs egentligen bara
// Sidebar -
//  Lägg till en playlist
//    - searchresultitem ska få veta att det finns en ny playlist
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
