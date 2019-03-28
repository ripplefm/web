import React, { Component } from 'react';
import LandingPage from '../components/landing-page';
import Dashboard from '../components/dashboard';
import { getOrCreate } from '../lib/services/ripple-api';
import wrapUnauthorized from '../lib/utils/wrap-unauthorized';

export default class Index extends Component {
  static async getInitialProps(context) {
    const ripple = await getOrCreate(context);

    const results = await Promise.all([
      ripple.getStations(),
      wrapUnauthorized(ripple.getCurrentUser()),
      wrapUnauthorized(ripple.getFollowedStations())
    ]);

    return {
      stations: results[0] ? results[0].stations : [],
      user: results[1],
      followingStations: results[2] ? results[2].stations : []
    };
  }

  render() {
    const { user, stations, followingStations } = this.props;

    if (user) {
      return (
        <Dashboard
          user={user}
          popularStations={stations}
          followingStations={followingStations}
        />
      );
    }
    return <LandingPage stations={stations} />;
  }
}
