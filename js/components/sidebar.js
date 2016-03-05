import explanation from "components/explanation"
import listitem from "components/listitem"
import textinput from "components/textinput"
import { renderList } from "lib/dom";
import { comp, hashToRenderable, dissoc, copy } from "lib/functional";

export default function sidebar(playlists, showfunc, deletefunc, next) {
  let main = document.createElement("div");
  main.appendChild(explanation("sidebar"))
  let heading = document.createElement("h3");
  heading.textContent = "Playlists:";
  heading.className = "skew"
  main.appendChild(heading)
  let listEl = document.createElement("div");
  function show(item) {
    showfunc(item.title);
  }

  function remove(item) {
    deletefunc(item.title);
    render();
  }

  var addBox = textinput(function(name) {
    if(!playlists[name]) {
      playlists[name] = [];
      render();
    }
  });
  addBox.querySelector("input").placeholder = "Create playlist: Type + Enter"
  addBox.className = "sidebarbox"

  function play(item) {
    playlists.queue = copy(playlists[item.title]);
    next();
  }

  var normalList = listitem({
    "Show": { action: show, className: "blue" },
    "Play List": { action: play, className: "pink" },
    "Remove": { action: remove, className: "purple"}
  });
  var items = comp(hashToRenderable, dissoc.bind(null, playlists, "queue"));
  var list = renderList.bind(null, listEl, normalList);

  // "queue" and "search" are special items that can"t be removed
  // so they have a special item with only a "show" btn
  var specialList = listitem({ "Show": { action: show, className: "blue" } });
  var append = function(ul) {
    ul.querySelector('ul').appendChild(specialList({ title: "queue" }));
    ul.querySelector('ul').appendChild(specialList({ title: "search" }));
  };

  var render = comp(append, list, items);
  main.appendChild(listEl);
  main.appendChild(addBox);
  main.className = "sidebar"

  render();

  return main;
}
