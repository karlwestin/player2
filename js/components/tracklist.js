export default function tracklist(items, listitem) {
  var ul = document.createElement("ul");

  items = items || [];
  items.forEach(function(item) {
    var el = listitem(item);
    ul.appendChild(el);
  });

  return ul;
}
