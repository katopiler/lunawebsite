const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');

// Set up the Express router
router.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'index.html'));
});

router.get('/styles.css', function(req, res){
  res.sendFile(path.join(__dirname, 'styles.css'));
});

router.get('/logo.png', function(req, res){
  res.sendFile(path.join(__dirname, 'logo.png'));
});

app.use('/', router);

// Set up the Express server to listen on port 3000 and log some messages when the server is ready
let server = app.listen(3000, function(){
  console.log("App server is running on port 3000");
});
