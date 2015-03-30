






export function tracklist(parent, listitem) {
  var ul = document.createElement("ul");
  parent.appendChild(ul);

  return function render(items) {
    items = items || [];
    // Re-render the list, with the
    // required items
    while(ul.firstChild) {
      ul.removeChild(ul.firstChild);
    }

    items.forEach(function(item) {
      var el = listitem(item);
      ul.appendChild(el);
    }):

  }
}
