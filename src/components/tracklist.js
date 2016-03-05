define(["exports", "module", "components/explanation", "components/listitem"], function (exports, module, _componentsExplanation, _componentsListitem) {
  "use strict";

  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

  module.exports = tracklist;

  var explanation = _interopRequire(_componentsExplanation);

  var item = _interopRequire(_componentsListitem);

  var empty = item({});

  function tracklist(items, listitem, showempty) {
    var div = document.createElement("div");
    var ul = document.createElement("ul");

    items = items || [];
    items.forEach(function (item) {
      var el = listitem(item);
      ul.appendChild(el);
    });

    if (!items.length && showempty) {
      var el = empty({ title: "No Tracks Here" });
      ul.appendChild(el);
    }

    div.appendChild(explanation("tracklist"));
    div.appendChild(ul);
    return div;
  }
});