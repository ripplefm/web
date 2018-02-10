import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import styled from 'react-emotion';
import { getStations } from '../../actions/stations-actions';
import StationSnippet, { StationCard } from './station-snippet';
import StationSnippetModal from '../common/modals/station-snippet-modal';

const ScrollbarCover = styled.div`
  width: 100%;
  height: 16px;
  background: #212121;
  position: absolute;
  bottom: 48px;
  left: 0px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const mapStateToProps = state => {
  return {
    loading: state.stations.loading,
    stations: state.stations.stations
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getStations: () => dispatch(getStations())
  };
};

class StationSnippetList extends Component {
  state = {
    clicked: false,
    clickedStation: undefined,
    join: false
  };

  componentDidMount() {
    this.props.getStations();
  }

  render() {
    const { clicked, clickedStation, join } = this.state;
    const { loading, stations } = this.props;
    return (
      <div style={{ padding: '48px 0px 48px 0px', position: 'relative' }}>
        {clicked && join ? (
          <Redirect push to={`/stations/${clickedStation.slug}`} />
        ) : null}
        <h1 style={{ marginBottom: '16px', marginLeft: '15%' }}>
          Popular Stations
        </h1>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            overflowY: 'visible',
            overflowX: 'scroll'
          }}
        >
          {stations.map(
            (station, index) =>
              clickedStation === undefined ||
              clickedStation.slug !== station.slug ? (
                <StationSnippet
                  loading={loading}
                  onClick={() =>
                    this.setState({ clicked: true, clickedStation: station })
                  }
                  key={station.slug}
                  station={station}
                />
              ) : (
                <StationCard key={station.slug} style={{ opacity: '0' }} />
              )
          )}
        </div>
        <ScrollbarCover />
        <StationSnippetModal
          station={clickedStation}
          visible={!!clickedStation && clicked}
          onJoin={() => this.setState({ join: true })}
          onCancel={() => {
            this.setState({ clicked: false });
            setTimeout(() => this.setState({ clickedStation: undefined }), 200);
          }}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StationSnippetList);
