import explanation from "components/explanation";
import item from 'components/listitem'

let empty = item({})

export default function tracklist(items, listitem, showempty) {
  let div = document.createElement("div")
  let ul = document.createElement("ul");

  items = items || [];
  items.forEach(function(item) {
    let el = listitem(item);
    ul.appendChild(el);
  });

  if(!items.length && showempty) {
    let el = empty({ title: 'No Tracks Here' })
    ul.appendChild(el)
  }

  div.appendChild(explanation("tracklist"))
  div.appendChild(ul)
  return div;
}
