const mongoose = require('mongoose');
const express = require('express');
const helpers = require('../helpers/github.js');
const db = require('../database/index.js');
let app = express();
app.use(express.json());

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database

  helpers.getReposByUsername(req.body.username)
  // .then((data) => { return res.status(201).send(data) })
  .then((data)=>{
    console.log('666-----', data);
    res.send(JSON.stringify(data))
  });

});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  db.getTop25Reops((err, result) => {
    if (err) {
      console.log('failed to get top 25 repos')
    } else {
      console.log('fetched top 25 repos');
      return res.status(200).send(result);
    }
  })
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

