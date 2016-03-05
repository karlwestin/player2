define(["exports", "module", "components/listitem", "components/explanation", "lib/dom"], function (exports, module, _componentsListitem, _componentsExplanation, _libDom) {
  "use strict";

  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

  module.exports = playlist;

  var listitem = _interopRequire(_componentsListitem);

  var explanation = _interopRequire(_componentsExplanation);

  var renderList = _libDom.renderList;

  function playlist(list, name, playnowFunc) {
    var listEl = document.createElement("div");
    listEl.className = "playlist whitebox";
    listEl.appendChild(explanation("playlist"));

    function remove(item) {
      var index = list.indexOf(item);
      if (index > -1) {
        list.splice(index, 1);
      }
      render();
    }

    var buttons = {
      "Play Now": playnowFunc
    };
    var label = "Remove from " + name;
    buttons[label] = remove;

    var trackitem = listitem(buttons);
    var render = renderList.bind(null, listEl, trackitem, list, true);
    render();

    return listEl;
  }
});