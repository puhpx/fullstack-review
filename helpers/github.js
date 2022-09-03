const axios = require('axios');
const config = require('../config.js');
const db = require('../database/index.js')

let getReposByUsername = (username) => {
  let repos = [];
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  axios.get(options.url, {headers: options.headers})
   .then(res => {
    console.log('fetched user\'s repos', res);
    db.save(res.data);
    })
   .catch(err => {console.log('failed$$$')})
}

module.exports.getReposByUsername = getReposByUsername;