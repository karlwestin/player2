import explanation from 'components/explanation';

export default function button(label, action) {
  let div = document.createElement("div");
  div.className = "button-wrapper";

  let button = document.createElement("button");
  button.type = button;
  button.innerText = label;
  button.addEventListener("click", function(e) {
    action();
    e.preventDefault();
  }, false);

  div.appendChild(explanation("button"));
  div.appendChild(button);
  return div;
}
