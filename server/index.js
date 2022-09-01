const mongoose = require('mongoose');
const express = require('express');
const helpers = require('../helpers/github.js')
let app = express();
app.use(express.json());

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  console.log('$$$req.body$$$--->', req.body),
  helpers.getReposByUsername(req.body.username),
  res.end('DONE')
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  // console.log('req', req.repos);
  // console.log('res', res.repos);
  console.log('i am hhhhhhh')
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

