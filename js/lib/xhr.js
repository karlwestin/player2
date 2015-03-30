

function req(url, method, data, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);

  xhr.onreadystatechange = function(event) {
    if(xhr.readyState !== 4) {
      return;
    }

    if(xhr.status !== 200) {
      callback(xhr.responseText, null);
    } else {
      callback(null, xhr.responseText);
    }
  }

  xhr.send(data);
}

export function get(url, callback) {
  req(url, "GET", undefined, callback);
}
