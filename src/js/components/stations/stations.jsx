import React from 'react';
import { Route } from 'react-router-dom';
import Station from './station/station';

const Stations = () => [
  <Route
    key="stations"
    path="/stations"
    exact
    render={() => <div>stations</div>}
  />,
  <Route key="station" path="/stations/:slug" exact component={Station} />
];

export default Stations;
