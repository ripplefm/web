import React from 'react';

export default ({ user, popularStations, followingStations }) => (
  <div>
    <h1>dashboard</h1>
    <h2>user: {JSON.stringify(user)}</h2>
    <h2>popular stations: {JSON.stringify(popularStations)}</h2>
    <h2>following: {JSON.stringify(followingStations)}</h2>
  </div>
);
