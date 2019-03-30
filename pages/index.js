import React, { Component } from 'react';
import LandingPage from '../components/landing-page';
import DashboardHome from '../components/dashboard/dashboard-home';
import { getOrCreate } from '../lib/services/ripple-api';
import wrapUnauthorized from '../lib/utils/wrap-unauthorized';
import featuredStations from '../lib/data/featured-stations.json';

export default class Index extends Component {
  static async getInitialProps(context) {
    const { query } = context;
    const ripple = await getOrCreate(context);

    const results = await Promise.all([
      ripple.getStations(),
      wrapUnauthorized(ripple.getCurrentUser()),
      wrapUnauthorized(ripple.getFollowedStations())
    ]);

    return {
      popularStations: results[0] ? results[0].stations : [],
      user: results[1],
      followingStations: results[2] ? results[2].stations : [],
      currentPath: context.pathname,
      featuredStation:
        featuredStations[parseInt(Math.random() * featuredStations.length, 10)],
      query
    };
  }

  render() {
    const { user, popularStations, query } = this.props;

    if (user) {
      return <DashboardHome {...this.props} />;
    }
    return <LandingPage stations={popularStations} query={query} />;
  }
}
