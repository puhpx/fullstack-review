import React from 'react';

const RepoList = (props) => (
console.log('props--->', props),
  <div>
    <div>
      <h4> Repo List Components </h4>
      There are {props.repos.length} repos.
    </div>
    <div>
      <h4> Top 25 Repos: </h4>
      {props.top25Repos.map(repo => {
        return (
          <li key={repo._id}>
          repo: {repo.repo_name} -------
          forks: {repo.forks_count}
          </li>
        )
      })}
    </div>
  </div>
)

export default RepoList;