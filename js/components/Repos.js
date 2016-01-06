import React from 'react';
import request from 'superagent';
import GithubUser from './GithubUser';

var Repos = React.createClass({
  getInitialState() {
    return {};
  },
  componentWillMount() {
    this.setState({
      loading: true
    });

    request
      .get('https://api.github.com/users/ziad-saab/repos')
      .end((err, res) => {
        this.setState({
          loading: false
        });

        if (err) {
          this.setState({
            error: err
          });
        }
        else {
          this.setState({
            repos: res.body
          });
        }
      });
  },
  render() {
    return (
      <div>
        <h2>Repos</h2>
        {this.renderRepos()}
      </div>
    )
  },
  renderRepos() {
    if (this.state.error) {
      return 'An error occurred: ' + JSON.stringify(this.state.error);
    }
    else if (this.state.loading || !this.state.repos) {
      return 'loading...';
    }
    else if (this.state.repos.length === 0) {
      return 'no repos...';
    }
    else {
      return (<ul>{this.state.repos.map(this.renderRepo)}</ul>);
    }
  },
  renderRepo(repo) {
    return (
      <li key={repo.id}>
        <a href={repo.html_url}>{repo.name}</a>
      </li>
    )
  }
});

export default Repos;
