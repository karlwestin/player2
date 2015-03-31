

export default function listitem(actions) {
  return function(item) {
    var li = document.createElement("li");
    var text = document.createTextNode(item.title);
    li.appendChild(text);

    Object.keys(actions).forEach(function(label) {
      var button = document.createElement("button");
      button.type = button;
      button.innerText = label;
      button.addEventListener("click", function(e) {
        actions[label](item);
        e.preventDefault();
      }, false);

      li.appendChild(button);
    });

    return li;
  }
}
