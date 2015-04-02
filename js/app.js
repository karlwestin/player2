import search from 'components/search';
import sidebar from 'components/sidebar';
import playlist from 'components/playlist';
import player from 'components/player';
import { clear, clearAdd } from 'lib/dom';

var sidebarEl = document.querySelector("#sidebar");
var listEl = document.querySelector("#search")
var playerEl = document.querySelector("#player")

var playlists = {
  queue: []
};

// functions to manage playlists and coordinate views
var showing = ""
function queue(track) {
  playlists.queue.unshift(track);
  nextTrack();
}

function showlist(name) {
  showing = name;
  if(name === "search") {
    return clearAdd(listEl, search(playlists, queue));
  }
  clearAdd(listEl, playlist(playlists[name], name, queue));
}

function removelist(name) {
  delete playlists[name];

  if(showing === name) {
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

// behövs egentligen bara
// TrackList
// - "Play List" - tar bort hela queuen och ersätter med list
