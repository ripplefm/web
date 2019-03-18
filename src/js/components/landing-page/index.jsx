import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import Banner from './banner';
import { getStations } from '../../actions/stations-actions';
import StationSnippetList from '../common/station-snippet/station-snippet-list';
import About from './sections/about';
import StationFeatures from './sections/station-features';
import SignUpBox from './sections/sign-up-box';
import Footer from './sections/footer';

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

const StationContainer = styled.div`
  margin: 64px 0px;
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
          <StationContainer>
            <StationSnippetList
              title="Popular Stations"
              stations={stations}
              loading={loading}
              limit="5"
            />
          </StationContainer>
          <About />
          <StationFeatures />
          <SignUpBox />
          <Footer />
        </ContentContainer>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingPage);
