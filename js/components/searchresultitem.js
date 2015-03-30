

export default function searchresultitem(addfunc) {
  return function(item) {
    var li = document.createElement("li");
    var text = document.createTextNode(item.title);

    var button = document.createElement("button");
    button.type = button;
    button.innerText = "add to queue";
    button.addEventListener("click", function(e) {
      addfunc(item);
      e.preventDefault();
    }, false);

    return li;
  }
}
