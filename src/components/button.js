define(["exports", "module", "components/explanation"], function (exports, module, _componentsExplanation) {
  "use strict";

  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

  module.exports = button;

  var explanation = _interopRequire(_componentsExplanation);

  function button(label, action) {
    var div = document.createElement("div");
    div.className = "button-wrapper";

    var button = document.createElement("button");
    button.type = button;
    button.innerText = label;
    button.addEventListener("click", function (e) {
      action();
      e.preventDefault();
    }, false);

    div.appendChild(explanation("button"));
    div.appendChild(button);
    return div;
  }
});