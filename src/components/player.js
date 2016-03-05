define(["exports", "module", "components/button", "components/explanation", "lib/dom", "lib/functional", "services/searchtracks"], function (exports, module, _componentsButton, _componentsExplanation, _libDom, _libFunctional, _servicesSearchtracks) {
  "use strict";

  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

  module.exports = player;

  var button = _interopRequire(_componentsButton);

  var explanation = _interopRequire(_componentsExplanation);

  var show = _libDom.show;
  var hide = _libDom.hide;
  var keys = _libFunctional.keys;
  var flatten = _libFunctional.flatten;
  var hashMap = _libFunctional.hashMap;
  var addId = _servicesSearchtracks.addId;

  var emptyTrack = "img/empty.png";

  function player(track, next) {
    var hasTrack = !!track;

    var audio = document.createElement("audio");
    audio.addEventListener("ended", next, false);

    var el = document.createElement("div");
    el.className = "player whitebox horizontal-flex";

    el.appendChild(audio);
    el.appendChild(explanation("player"));
    hide(audio);

    // render elements - label, album image
    var label = document.createElement("div");
    label.className = "label";
    var cover = document.createElement("img");

    if (hasTrack) {
      if (track.stream_url) {
        audio.src = addId(track.stream_url);
      } else {
        alert("This track doesn't have a stream url");
      }

      label.innerText = track.title;
      cover.src = track.artwork_url || emptyTrack;
    } else {
      label.innerText = "No Track";
      cover.src = emptyTrack;
    }

    el.appendChild(cover);
    el.appendChild(label);

    var buttons = {
      Pause: function Pause() {
        if (!hasTrack) {
          return;
        }

        audio.pause();
        show(rendered.Play);
        hide(rendered.Pause);
      },
      Play: function Play() {
        if (!hasTrack) {
          return next();
        }

        audio.play();
        hide(rendered.Play);
        show(rendered.Pause);
      },
      Next: function Next() {
        if (hasTrack) {
          audio.pause();
        }
        next();
      }
    };

    var colors = ["purple", "pink", "red"];
    // render buttons
    var rendered = hashMap.apply(null, flatten.apply(null, keys(buttons).map(function (label, index) {
      var btn = button(label, buttons[label]);
      btn.querySelector("button").className = colors[index];
      el.appendChild(btn);
      return [label, btn];
    })));

    if (hasTrack) {
      buttons.Play();
    } else {
      show(rendered.Play);
      hide(rendered.Pause);
    }

    return el;
  }
});
