import button from 'components/button';
import explanation from 'components/explanation';
import { show, hide } from 'lib/dom';
import { keys, flatten, hashMap } from 'lib/functional';
import { addId } from 'services/searchtracks';

var emptyTrack =  "/img/empty.png";
export default function player(track, next) {
  var hasTrack = !!track;

  var audio = document.createElement("audio");
  audio.addEventListener("ended", next, false)

  var el = document.createElement("div");
  el.className = "player whitebox horizontal-flex"

  el.appendChild(audio);
  el.appendChild(explanation("player"));
  hide(audio);

  // render elements - label, album image
  var label = document.createElement("div");
  label.className = "label";
  var cover = document.createElement("img");

  if(hasTrack) {
    if(track.stream_url) {
      audio.src = addId(track.stream_url);
    } else {
      alert('This track doesn\'t have a stream url');
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

  let colors = ["purple", "pink", "red"]
  // render buttons
  let rendered = hashMap.apply(null,
    flatten.apply(null,
      keys(buttons).map(function(label, index) {
        let btn = button(label, buttons[label]);
        btn.querySelector("button").className = colors[index];
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
