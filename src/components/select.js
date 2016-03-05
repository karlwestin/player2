define(["exports", "module", "components/explanation", "components/tracklist", "components/listitem", "lib/dom", "lib/functional"], function (exports, module, _componentsExplanation, _componentsTracklist, _componentsListitem, _libDom, _libFunctional) {
  "use strict";

  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

  module.exports = select;

  var explanation = _interopRequire(_componentsExplanation);

  var tracklist = _interopRequire(_componentsTracklist);

  var listitem = _interopRequire(_componentsListitem);

  var renderList = _libDom.renderList;
  var hashToRenderable = _libFunctional.hashToRenderable;

  function select(lists, track, done) {
    var el = document.createElement("div");
    var label = document.createElement("label");
    label.innerHTML = "Select a Playlist to add <b>" + track.title + "</b> to:";
    el.appendChild(explanation("select"));
    el.appendChild(label);

    function add(list) {
      lists[list.title].push(track);
      done();
    }

    var options = hashToRenderable(lists);
    var item = listitem({ "Add to Playlist": add });
    var playlists = tracklist(options, item);
    playlists.className = "add-list pink";
    el.appendChild(playlists);
    return el;
  }
});