const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  user_name: String,
  user_id: Number,
  repo_id: Number,
  repo_name: {
    type: String, unique : true, dropDups: true
  }
  repos_url: String,
  forks_count: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repos) => {
  // This function should save a repo or repos to
  // the MongoDB
  foreach(repos, (repo) => {
    repo = new Repo({
      user_name: this.owner.login,
      user_id: this.owner.id,
      repo_id: this.id,
      repo_name: this.name,
      repos_url: this.repos_url,
      forks_count: this.forks_count
    })
    repo.save((err, data) => {
      if (err) {
        console.log('Save error: ', err);
      } else {
        console.log('Data saved!')
      }
    });
  })
}

module.exports.save = save;