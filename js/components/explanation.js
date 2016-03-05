export default function explanation(label) {
  let el = document.createElement("div");
  let text = document.createTextNode(label);
  el.className = "explanation";
  el.appendChild(text);
  return el;
}
