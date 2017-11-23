import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Room from './room/room';

const Rooms = () => (
  <div>
    <Route path="/rooms" exact render={() => <div>ROOMS</div>} />
    <Route path="/rooms/:id" exact component={Room} />
  </div>
);

export default Rooms;
