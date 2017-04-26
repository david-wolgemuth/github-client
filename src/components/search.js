import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import { SearchUsersResults, SearchReposResults } from './search-results';
import { searchUsers, searchRepos } from '../actions';

class Search extends Component
{
  constructor (props)
  {
    super(props);
    this.state = { term: this.props.location.query.q, type: this.props.params.type };

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  componentDidMount ()
  {
    if (this.state.term) {
      this.search();
    }
  }
  search ()
  {
    const type = this.state.type;
    const term = this.state.term;
    console.log(this.state);
    if (type === 'users') {
      this.props.searchUsers(term);
    }
    if (type === 'repos') {
      this.props.searchRepos(term);
    }
    if (this.props.location.query.q !== term || this.props.params.type !== type) {
      browserHistory.push({
        pathname: `/search/${type}`,
        search: `?q=${term}`
      });
    }
  }
  onNavLinkClick (event, type)
  {
    event.preventDefault();
    this.setState({ type }, this.search);
  }
  onInputChange (term)
  {
    this.setState({ term });
  }
  onFormSubmit (event)
  {
    event.preventDefault();
    this.search();
  }
  renderSearchResults ()
  {
    const type = this.props.params.type;
    if (type === 'users') {
      if (this.props.searches.users.length > 0) {
        return <SearchUsersResults users={this.props.searches.users} />;
      }
    }
    if (type === 'repos') {
      if (this.props.searches.repos.length > 0) {
        return <SearchReposResults repos={this.props.searches.repos} />;
      }
    }
    return null;
  }
  render ()
  {
    const type = this.state.type;
    const term = this.state.term;
    return (
      <ul className="list-group">
        <li className="list-group-item">
          <form onSubmit={this.onFormSubmit}>
            <div className="input-group">
              <input
                className="form-control"
                type="text"
                placeholder="Search"
                value={this.state.term}
                onChange={(e) => {this.onInputChange(e.target.value)}} />
              <span className="input-group-btn">
                <button className="btn btn-outline-success" type="submit">Search</button>
              </span>
            </div>
          </form>
        </li>
        <li className="list-group-item">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a href className={'nav-link ' + (type==='users'?'active':'')} onClick={(e)=>this.onNavLinkClick(e, 'users')}>Users</a>
            </li>
            <li className="nav-item">
              <a href className={'nav-link ' + (type==='repos'?'active':'')} onClick={(e)=>this.onNavLinkClick(e, 'repos')}>Repositories</a>
            </li>
          </ul>
        </li>
        {this.renderSearchResults()}
      </ul>
    )
  }
}

export default connect((state) => ({ searches: state.searches }), { searchUsers, searchRepos } )(Search);
