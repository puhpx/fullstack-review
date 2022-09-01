const axios = require('axios');
const config = require('../config.js');

let getReposByUsername = (username) => {
  console.log('username--->', username)
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  axios.get(options.url, {headers: options.headers})
   .then(res => {console.log('res--->', res)})
   .catch(err => {console.log('failed')})
}



module.exports.getReposByUsername = getReposByUsername;