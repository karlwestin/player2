define(["exports", "components/search", "components/sidebar", "components/playlist", "components/player", "lib/dom"], function (exports, _componentsSearch, _componentsSidebar, _componentsPlaylist, _componentsPlayer, _libDom) {
  "use strict";

  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

  var search = _interopRequire(_componentsSearch);

  var sidebar = _interopRequire(_componentsSidebar);

  var playlist = _interopRequire(_componentsPlaylist);

  var player = _interopRequire(_componentsPlayer);

  var clear = _libDom.clear;
  var clearAdd = _libDom.clearAdd;

  var sidebarEl = document.querySelector("#sidebar");
  var listEl = document.querySelector("#search");
  var playerEl = document.querySelector("#player");

  var playlists = {
    queue: []
  };

  // functions to manage playlists and coordinate views
  var showing = "";
  function queue(track) {
    playlists.queue.unshift(track);
    nextTrack();
  }

  function showlist(name) {
    showing = name;
    if (name === "search") {
      return clearAdd(listEl, search(playlists, queue));
    }
    clearAdd(listEl, playlist(playlists[name], name, queue));
  }

  function removelist(name) {
    delete playlists[name];

    if (showing === name) {
      showlist("queue");
    }
  }

  function nextTrack() {
    var track = playlists.queue.shift();
    clearAdd(playerEl, player(track, nextTrack));
  }

  // Create components and kick of the app!
  sidebarEl.appendChild(sidebar(playlists, showlist, removelist, nextTrack));
  showlist("search");
  nextTrack();
});