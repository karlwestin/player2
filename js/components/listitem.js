import button from 'components/button';

export default function listitem(actions) {
  return function(item) {
    var li = document.createElement("li");
    var text = document.createTextNode(item.title);
    li.appendChild(text);

    Object.keys(actions).map(function(label) {
      var btn = button(label, actions[label].bind(null, item));
      li.appendChild(btn);
    });

    return li;
  }
}
