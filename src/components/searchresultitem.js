define(["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = listitem;

  function listitem(action, text) {
    return function (item) {
      var li = document.createElement("li");
      var text = document.createTextNode(item.title);

      var button = document.createElement("button");
      button.type = button;
      button.innerText = text;
      button.addEventListener("click", function (e) {
        action(item);
        e.preventDefault();
      }, false);

      li.appendChild(text);
      li.appendChild(button);

      return li;
    };
  }
});