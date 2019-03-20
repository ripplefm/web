import React, { Component } from 'react';
import { connect } from 'react-redux';
import DashboardBanner from './dashboard-banner';
import {
  getStations,
  getFollowingStations
} from '../../../../actions/stations-actions';
import StationSnippetList from '../../../common/station-snippet/station-snippet-list';

const mapStateToProps = state => {
  return {
    loading: state.stations.loading,
    stations: state.stations.stations,
    followingStations: state.stations.followingStations
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getStations: () => dispatch(getStations()),
    getFollowingStations: () => dispatch(getFollowingStations())
  };
};

class DashboardHome extends Component {
  componentDidMount() {
    this.props.getStations();
    this.props.getFollowingStations();
  }

  render() {
    const { stations, followingStations, loading } = this.props;
    return (
      <div>
        <DashboardBanner />
        <div style={{ padding: '24px 0px 24px 24px' }}>
          <StationSnippetList
            title="Popular Stations"
            stations={stations}
            loading={loading}
          />
          <StationSnippetList
            title="Following"
            stations={followingStations}
            loading={loading}
          />
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardHome);
