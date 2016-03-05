# Player2

See it running here! [http://karlwestin.github.io/player2/](http://karlwestin.github.io/player2/)

Just a little reflection on how to write the simple audio player, search interface and playlist creator in a different style, w/o frameworks.
I tried to do it a little clojurescript-y, where handlers that are working on the data model are passed down from the app root. Think of the 'playlists' hash as the Om-atom that they pass around. Instead of adding the layer of indirection by swapping on the atom, we just do the data manipulation and call some handlers. That pattern works in such a small app.

### Building

```
npm install

npm run build
# (or npm run watch if you wanna hack)

# in a different terminal window, you can

npm run serve

# which starts a little server on localhost:8888
```
### Reading the Source

start in [app.js](https://github.com/karlwestin/player2/blob/master/js/app.js), then you can start reading smaller components, like the [search box](https://github.com/karlwestin/player2/blob/master/js/components/searchbox.js). The application state is stored on the `window.playlists` hash, defined in app.js.

Some components:
components/textinput
- creates a text input that calls a function with its value on enter

components/player
- takes a track from the queue, creates an audio element and shows the album art

components/search
- uses a text box, calls the searchtracks service, re-renders itself when searchtracks returns

components/listitem
- takes a map of actions, generates a function that creates list items. This is used to create several different items: **search results** with 'add to playlist' and 'play now', **play lists in the sidebar** with show, delete and queue buttons, and tracks in playlists with a 'play' and 'remove' buttons.

At the bottom of the screen, there's **toggle component names** button, that shows labels indicating where each thing on the screen comes from.

### License

Please don't re-use this code, or try to pass it off as your own. Think up a little learning project to yourself instead :)

