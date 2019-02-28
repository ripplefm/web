import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'react-emotion';
import Banner from './banner';
import { getStations } from '../../actions/stations-actions';
import StationSnippetList from '../common/station-snippet/station-snippet-list';

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

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

class LandingPage extends Component {
  componentDidMount() {
    this.props.getStations();
  }

  render() {
    const { stations, loading } = this.props;
    return (
      <div>
        <Banner />
        <ContentContainer>
          <StationSnippetList
            title="Popular Stations"
            stations={stations}
            loading={loading}
            limit="5"
          />
        </ContentContainer>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingPage);
