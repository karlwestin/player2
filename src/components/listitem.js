define(["exports", "module", "components/button", "components/explanation"], function (exports, module, _componentsButton, _componentsExplanation) {
  "use strict";

  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

  module.exports = listitem;

  var button = _interopRequire(_componentsButton);

  var explanation = _interopRequire(_componentsExplanation);

  function listitem(actions) {
    return function (item) {
      var li = document.createElement("li");
      li.className = "listitem horizontal-flex";
      li.appendChild(explanation("listitem"));
      var textDiv = document.createElement("div");
      var text = document.createElement("span");
      textDiv.className = "listitemlabel";
      text.textContent = item.title;
      textDiv.appendChild(text);
      li.appendChild(textDiv);

      var buttons = document.createElement("div");
      buttons.className = "listitembuttons";

      Object.keys(actions).map(function (label) {
        var action = undefined;
        if (actions[label].action) {
          action = actions[label].action;
        } else {
          action = actions[label];
        }
        var btn = button(label, action.bind(null, item));
        btn.querySelector("button").className = actions[label].className;
        buttons.appendChild(btn);
      });

      li.appendChild(buttons);
      return li;
    };
  }
});