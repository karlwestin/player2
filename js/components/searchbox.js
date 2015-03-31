



/*
  Creates a search box

  takes a parent (dom element) and a search function,
  which is called when the user hits 'enter'
*/
export default function box(parent, searchfunc) {
  var input = document.createElement("input");
  input.type="text";
  input.addEventListener("keydown", function(e) {
    if(e.keyCode === 13) {
      e.preventDefault();
      searchfunc(input.value);
    }
  }, false);
  parent.appendChild(input);
}
