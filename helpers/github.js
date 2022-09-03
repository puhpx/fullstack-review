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

  return axios.get(options.url, {headers: options.headers})
   .then(res => {
    console.log('fetched user\'s repos');
    db.save(res.data);

    return res.data
    })
   .catch(err => {console.log('failed$$$')})
  //  .then((username) => {
  //   console.log('dddd', username)
  //   db.getUserRepos(username, (err, result) => {
  //     if(err) throw err;
  //     console.log('ahhahah', result)
  //     return (result);
  //   })
  //  })
}

module.exports.getReposByUsername = getReposByUsername;