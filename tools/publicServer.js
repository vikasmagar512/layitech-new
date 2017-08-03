import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';
import favicon from 'serve-favicon';


/*eslint-disable no-console */

const port = process.env.PORT || 8080;
const app = express();

app.use(compression());
app.use(express.static('public'));
app.use(favicon(path.join(__dirname,'assets','public','favicon.ico')));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("App now running on port", port);
    open(`http://localhost:${port}`);
  }
});

  // Initialize the app.
 /* var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });*/
