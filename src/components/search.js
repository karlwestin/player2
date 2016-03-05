define(["exports", "module", "components/listitem", "components/explanation", "services/searchtracks", "components/textinput", "lib/dom", "components/select"], function (exports, module, _componentsListitem, _componentsExplanation, _servicesSearchtracks, _componentsTextinput, _libDom, _componentsSelect) {
  "use strict";

  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

  module.exports = search;

  var listitem = _interopRequire(_componentsListitem);

  var explanation = _interopRequire(_componentsExplanation);

  var searchtracks = _servicesSearchtracks.searchtracks;

  var textinput = _interopRequire(_componentsTextinput);

  var remove = _libDom.remove;
  var renderList = _libDom.renderList;

  var select = _interopRequire(_componentsSelect);

  function search(playlists, playNow) {
    var main = document.createElement("div");
    var listEl = document.createElement("div");
    listEl.className = "searchresults";
    main.appendChild(explanation("search"));
    main.className = "whitebox";

    var selector;
    function add(track) {
      remove(selector);

      selector = select(playlists, track, function () {
        remove(selector);
      });

      main.appendChild(selector);
    };

    var searchresitem = listitem({ "Add to List": add, "Play Now": playNow });
    var render = renderList.bind(null, listEl, searchresitem);

    var box = textinput(function (searchval) {
      searchtracks(searchval, render);
    });
    box.querySelector("input").placeholder = "Search: Type + Enter";

    main.appendChild(box);
    main.appendChild(listEl);

    render([]);

    return main;
  }
});