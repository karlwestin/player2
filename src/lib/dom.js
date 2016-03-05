define(["exports", "components/tracklist"], function (exports, _componentsTracklist) {
  "use strict";

  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

  exports.remove = remove;
  exports.clear = clear;
  exports.clearAdd = clearAdd;
  exports.renderList = renderList;
  exports.show = show;
  exports.hide = hide;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var tracklist = _interopRequire(_componentsTracklist);

  function remove(element) {
    if (element && element.parentNode) {
      element.parentNode.removeChild(element);
    }
  }

  function clear(element) {
    while (element.firstChild) {
      remove(element.firstChild);
    }
  }

  function clearAdd(element, toAdd) {
    clear(element);
    element.appendChild(toAdd);
  }

  function renderList(element, item, list, showEmpty) {
    var el = tracklist(list, item, showEmpty);
    clear(element);
    element.appendChild(el);
    return el;
  }

  function show(element) {
    element.style.display = "";
  }

  function hide(element) {
    element.style.display = "none";
  }
});