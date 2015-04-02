


export default function button(label, action) {
  var button = document.createElement("button");
  button.type = button;
  button.innerText = label;
  button.addEventListener("click", function(e) {
    action();
    e.preventDefault();
  }, false);
  return button;
}
