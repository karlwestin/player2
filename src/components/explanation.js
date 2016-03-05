define(["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = explanation;

  function explanation(label) {
    var el = document.createElement("div");
    var text = document.createTextNode(label);
    el.className = "explanation";
    el.appendChild(text);
    return el;
  }
});