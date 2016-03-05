let shown = false;
document.querySelector(".js_show_component_names").addEventListener("click", function(e) {
  e.preventDefault();
  Array.prototype.map.call(document.getElementsByClassName("explanation"), function (el) {
    if(!shown) {
      return el.style.display = "block";
    }

    el.style.display = "none";
  });

  shown = !shown;
})
