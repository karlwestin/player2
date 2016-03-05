define(["exports", "module", "components/explanation", "components/listitem", "components/textinput", "lib/dom", "lib/functional"], function (exports, module, _componentsExplanation, _componentsListitem, _componentsTextinput, _libDom, _libFunctional) {
  "use strict";

  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

  module.exports = sidebar;

  var explanation = _interopRequire(_componentsExplanation);

  var listitem = _interopRequire(_componentsListitem);

  var textinput = _interopRequire(_componentsTextinput);

  var renderList = _libDom.renderList;
  var comp = _libFunctional.comp;
  var hashToRenderable = _libFunctional.hashToRenderable;
  var dissoc = _libFunctional.dissoc;
  var copy = _libFunctional.copy;

  function sidebar(playlists, showfunc, deletefunc, next) {
    var main = document.createElement("div");
    main.appendChild(explanation("sidebar"));
    var heading = document.createElement("h3");
    heading.textContent = "Playlists:";
    heading.className = "skew";
    main.appendChild(heading);
    var listEl = document.createElement("div");
    function show(item) {
      showfunc(item.title);
    }

    function remove(item) {
      deletefunc(item.title);
      render();
    }

    var addBox = textinput(function (name) {
      if (!playlists[name]) {
        playlists[name] = [];
        render();
      }
    });
    addBox.querySelector("input").placeholder = "Create playlist: Type + Enter";
    addBox.className = "sidebarbox";

    function play(item) {
      playlists.queue = copy(playlists[item.title]);
      next();
    }

    var normalList = listitem({
      Show: { action: show, className: "blue" },
      "Play List": { action: play, className: "pink" },
      Remove: { action: remove, className: "purple" }
    });
    var items = comp(hashToRenderable, dissoc.bind(null, playlists, "queue"));
    var list = renderList.bind(null, listEl, normalList);

    // "queue" and "search" are special items that can"t be removed
    // so they have a special item with only a "show" btn
    var specialList = listitem({ Show: { action: show, className: "blue" } });
    var append = function append(ul) {
      ul.querySelector("ul").appendChild(specialList({ title: "queue" }));
      ul.querySelector("ul").appendChild(specialList({ title: "search" }));
    };

    var render = comp(append, list, items);
    main.appendChild(listEl);
    main.appendChild(addBox);
    main.className = "sidebar";

    render();

    return main;
  }
});