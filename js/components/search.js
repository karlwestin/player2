import listitem from "components/listitem"
import explanation from "components/explanation"
import { searchtracks } from "services/searchtracks"
import textinput from "components/textinput"
import { remove, renderList } from "lib/dom";
import select from "components/select"

export default function search(playlists, playNow) {
  var main = document.createElement("div");
  var listEl = document.createElement("div");
  listEl.className = "searchresults";
  main.appendChild(explanation("search"));
  main.className = "whitebox";

  var selector;
  function add(track) {
    remove(selector);

    selector = select(playlists, track, function() {
      remove(selector);
    });

    main.appendChild(selector);
  };

  var searchresitem = listitem({ "Add to List": add, "Play Now": playNow });
  var render = renderList.bind(null, listEl, searchresitem);

  var box = textinput(function(searchval) {
    searchtracks(searchval, render);
  });
  box.querySelector("input").placeholder = "Search: Type + Enter"

  main.appendChild(box);
  main.appendChild(listEl);

  render([]);

  return main;
};
