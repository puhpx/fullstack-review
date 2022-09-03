import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
      top25Repos: []
    }
  }

  componentDidMount() {
    this.fetchTopRepos ()
  };

  search (term) {
    console.log(`${term} was searched`);
    $.ajax({
      type: "POST",
      url: "/repos",
      data: JSON.stringify({username: term}),
      success: (result) => {
        this.setState({
          repos: JSON.parse(result)
        });
      },
      error: (err) => {
        console.log('failed--->', err)
      },
      contentType: "application/json"
    });
  }

  fetchTopRepos () {
    $.ajax({
      type: "GET",
      url: "/repos",
      success: (result) => {
        this.setState({
          top25Repos: result
        })
      },
      error: (err) => {
        console.log('failed--->', err)
      },
      contentType: "application/json"
    });
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos} top25Repos={this.state.top25Repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));