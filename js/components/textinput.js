import explanation from "components/explanation";

/*
  Creates a text box

  takes a parent (dom element) and an action function,
  which is called when the user hits "enter"
*/
export default function box(action) {
  let div = document.createElement("div");
  let input = document.createElement("input");
  input.type="text";
  input.addEventListener("keydown", function(e) {
    if(e.keyCode === 13) {
      e.preventDefault();
      action(input.value);
    }
  }, false);

  div.appendChild(explanation("textinput"));
  div.appendChild(input);
  return div;
}
