import listitem from "components/listitem";
import explanation from "components/explanation";
import { renderList } from "lib/dom";

export default function playlist(list, name, playnowFunc) {
  var listEl = document.createElement("div");
  listEl.className = "playlist whitebox"
  listEl.appendChild(explanation("playlist"))

  function remove(item) {
    var index = list.indexOf(item);
    if(index > -1) {
      list.splice(index, 1);
    }
    render();
  }

  var buttons = {
    "Play Now": playnowFunc
  };
  var label = `Remove from ${name}`;
  buttons[label] = remove;

  var trackitem = listitem(buttons);
  var render = renderList.bind(null, listEl, trackitem, list, true);
  render();

  return listEl;
}
