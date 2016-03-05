define(["exports", "module", "components/explanation"], function (exports, module, _componentsExplanation) {
  "use strict";

  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

  /*
    Creates a text box
  
    takes a parent (dom element) and an action function,
    which is called when the user hits "enter"
  */
  module.exports = box;

  var explanation = _interopRequire(_componentsExplanation);

  function box(action) {
    var div = document.createElement("div");
    var input = document.createElement("input");
    input.type = "text";
    input.addEventListener("keydown", function (e) {
      if (e.keyCode === 13) {
        e.preventDefault();
        action(input.value);
      }
    }, false);

    div.appendChild(explanation("textinput"));
    div.appendChild(input);
    return div;
  }
});