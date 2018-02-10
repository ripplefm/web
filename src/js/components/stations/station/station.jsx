import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getStation,
  joinStation,
  leaveStation
} from '../../../actions/station-actions';
import NavBar from '../../common/navbar/navbar';
import StationSidebar from './station-sidebar';
import Player from './player/station-player';
import Chat from './chat/station-chat';
import '../../../../css/station/station.css';

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    station: state.station.station,
    error: state.station.error,
    loading: state.station.loading,
    authLoading: state.auth.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getStation: slug => dispatch(getStation(slug)),
    joinStation: slug => dispatch(joinStation(slug)),
    leaveStation: () => dispatch(leaveStation())
  };
};

class Station extends Component {
  componentDidMount() {
    const { getStation, match } = this.props;
    getStation(match.params.slug);
  }

  componentDidUpdate() {
    const { station, loading, authLoading, match, joinStation } = this.props;
    console.log('update', {
      station,
      loading,
      authLoading,
      user: this.props.user,
      match
    });
    if (station && !loading && !authLoading) {
      console.log('update join');
      joinStation(match.params.slug);
    }
  }

  componentWillUnmount() {
    if (this.props.station) {
      this.props.leaveStation();
    }
  }

  render() {
    const { station, error, loading, authLoading } = this.props;
    if (loading || authLoading) {
      return (
        <div>
          <NavBar />
          <h1>LOADING</h1>
        </div>
      );
    } else if (error) {
      return (
        <div>
          <NavBar />
          <h1>{JSON.stringify(error)}</h1>
        </div>
      );
    }
    return (
      <div className="station">
        <NavBar />
        <StationSidebar station={station} />
        <Player track={station ? station.current_track : undefined} />
        <Chat />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Station);
