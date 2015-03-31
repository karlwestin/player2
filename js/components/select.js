
import tracklist from 'components/tracklist'
import listitem from 'components/listitem'
import { renderList } from 'lib/dom';
import { hashToRenderable } from 'lib/functional';

export default function select(lists, track, done) {
  function add(list) {
    lists[list.title].push(track);
    done();
  }

  var options = hashToRenderable(lists);
  var item = listitem({ 'Add to Playlist': add });
  var el = tracklist(options, item);
  return el;
}
