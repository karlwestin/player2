import button from 'components/button';
import { show, hide } from 'lib/dom';
import { keys, flatten, hashMap } from 'lib/functional';
import { addId } from 'services/searchtracks';

export default function player(track, next) {
  var hasTrack = !!track;
  var audio = document.createElement("audio");
  audio.addEventListener("ended", next, false)

  var el = document.createElement("div");

  el.appendChild(audio);
  hide(audio);

  // render elements - label, album image
  var label = document.createElement("div");
  var cover = document.createElement("img");

  if(hasTrack) {
    audio.src = addId(track.stream_url);
    label.innerText = track.title;
    cover.src = track.artwork_url;
  } else {
    label.innerText = "No Track";
    cover.src = "/img/empty.png";
  }

  el.appendChild(label);
  el.appendChild(cover);

  var buttons = {
    "Pause" : function() {
      if(!hasTrack) {
        return;
      }

      audio.pause();
      show(rendered["Play"]);
      hide(rendered["Pause"]);
    },
    "Play" : function() {
      if(!hasTrack) {
        return next();
      }

      audio.play();
      hide(rendered["Play"]);
      show(rendered["Pause"]);
    },
    "Next" : function() {
      if(hasTrack) {
        audio.pause();
      }
      next();
    }
  };

  // render buttons
  var rendered = hashMap.apply(null,
    flatten.apply(null,
      keys(buttons).map(function(label) {
        var btn = button(label, buttons[label]);
        el.appendChild(btn);
        return [label, btn]
      })
    )
  );

  if(hasTrack) {
    buttons["Play"]();
  } else {
    show(rendered["Play"]);
    hide(rendered["Pause"]);
  }

  return el;
}
