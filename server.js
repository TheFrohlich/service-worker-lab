var express = require('express'); // imports the express.js module
var http = require('http'); // imports the http module
var app = express(); // creating an express instance


// these are the static locations of the directory and index.html file  
// config these to the location on your computer
// C://projects/service-worker-lab for example
const YOUR_STATIC_DIR = 'path\\to\\static\\directory\\';
const YOUR_INDEX_HTML_FILE = 'path\\to\\static\\directory\\index.html';

// configuring express to serve the index.html file
app.use(express.static(YOUR_STATIC_DIR))
app.get('/index.html', function (req, res) {
    console.log('serving index.html')
    res.sendFile(YOUR_INDEX_HTML_FILE);
});

// creating and starting the server on port 4000
var httpServer = http.createServer(app);
const port = 4000;
httpServer.listen(port, function () {
    console.log(`http Server is listening on port ${port}`);
});