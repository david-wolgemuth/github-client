import React from 'react';

export const SearchUsersResults = ({ users }) => (
  <ul className="list-group">
    {users.map(user => (
      <li key={user.id} className="list-group-item">
        <img width="64px" src={user.avatarUrl} />
        <h4>{ user.login }</h4>
      </li>
    ))}
  </ul>
);

export const SearchReposResults = ({ repos }) => (
  <ul className="list-group">
    {repos.map(repo => (
      <li key={repo.id} className="list-group-item">
        <h4>{repo.name}</h4>
        <p>Owner: {repo.owner.login}</p>
        <p>Stargazers: {repo.stargazersCount}</p>
      </li>
    ))}
  </ul>
)
