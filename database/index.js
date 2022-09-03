const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher', {
  useCreateIndex: true
});

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  user_name: String,
  user_id: Number,
  repo_id: Number,
  repo_name: {
    type: String, unique : true, dropDups: true
  },
  repos_url: String,
  forks_count: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repos) => {
  // This function should save a repo or repos to
  // the MongoDB

  repos.forEach((repo) => {
    var eachRepo = new Repo({
      user_name: repo.owner.login,
      user_id: repo.owner.id,
      repo_id: repo.id,
      repo_name: repo.name,
      repos_url: repo.repos_url,
      forks_count: repo.forks_count
    })
    eachRepo.save((err, data) => {
      if (err) {
        console.log('Save error: ');
      } else {
        console.log('Data saved!');
      }
    });
  })
}

let getTop25Reops = (cb) => {
  Repo.find()
      .sort({forks_count: -1})
      .limit(25)
      .exec(cb)
}

module.exports.save = save;
module.exports.getTop25Reops = getTop25Reops;