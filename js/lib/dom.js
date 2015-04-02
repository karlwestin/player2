import tracklist from 'components/tracklist'

export function remove(element) {
  if(element && element.parentNode) {
    element.parentNode.removeChild(element);
  }
}

export function clear(element) {
  while(element.firstChild) {
    remove(element.firstChild);
  }
}

export function clearAdd(element, toAdd) {
  clear(element);
  element.appendChild(toAdd);
}

export function renderList(element, item, list) {
  var el = tracklist(list, item);
  clear(element);
  element.appendChild(el);
  return el;
}

export function show(element) {
  element.style.display = '';
}

export function hide(element) {
  element.style.display = 'none';
}

