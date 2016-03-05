import explanation from "components/explanation"
import tracklist from "components/tracklist"
import listitem from "components/listitem"
import { renderList } from "lib/dom";
import { hashToRenderable } from "lib/functional";

export default function select(lists, track, done) {
  let el = document.createElement("div")
  let label = document.createElement("label")
  label.innerHTML = `Select a Playlist to add <b>${track.title}</b> to:`
  el.appendChild(explanation("select"))
  el.appendChild(label)

  function add(list) {
    lists[list.title].push(track);
    done();
  }

  let options = hashToRenderable(lists);
  let item = listitem({ "Add to Playlist": add });
  let playlists = tracklist(options, item)
  playlists.className = "add-list pink";
  el.appendChild(playlists);
  return el;
}
