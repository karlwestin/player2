# Player2

Just a little reflection on how to write the soundcloud player (used to be their job interview task) in a different style, w/o frameworks.
I tried doing it a little clojurescript-y, where handlers that are working on the data model are passed down from the app root. Think of the 'playlists' hash as the Om-atom that they pass around. Instead of adding the layer of indirection by swapping on the atom, we just do the data manipulation and call some handlers. That pattern works in such a small app.

### Building

```
npm install

npm run build
# (or npm run watch if you wanna hack)

# in a different terminal window, you can

npm run serve

# which starts a little server on localhost:8888
```

### License

Please don't re-use this code, or try to pass it off as your own. Think up a little learning project to yourself instead :)

