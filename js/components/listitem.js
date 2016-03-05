import button from 'components/button';
import explanation from 'components/explanation';

export default function listitem(actions) {
  return function(item) {
    let li = document.createElement("li");
    li.className = "listitem horizontal-flex";
    li.appendChild(explanation("listitem"));
    let textDiv = document.createElement("div");
    let text = document.createElement("span")
    textDiv.className = "listitemlabel";
    text.textContent = item.title;
    textDiv.appendChild(text)
    li.appendChild(textDiv);

    let buttons = document.createElement("div")
    buttons.className = "listitembuttons";

    Object.keys(actions).map(function(label) {
      let action;
      if(actions[label].action) {
        action = actions[label].action;
      } else {
        action = actions[label];
      }
      let btn = button(label, action.bind(null, item));
      btn.querySelector("button").className = actions[label].className;
      buttons.appendChild(btn);
    });

    li.appendChild(buttons)
    return li;
  }
}
