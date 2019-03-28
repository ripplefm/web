import React, { Component } from 'react';
import styled from '@emotion/styled';
import Banner from './banner';
import StationSnippetList from '../common/station-snippet-list';
import About from './sections/about';
import StationFeatures from './sections/station-features';
import SignUpBox from './sections/sign-up-box';
import Footer from './sections/footer';

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const StationContainer = styled.div`
  margin: 64px 0px;
`;

export default ({ stations }) => (
  <div>
    <Banner />
    <ContentContainer>
      <StationContainer>
        <StationSnippetList
          title="Popular Stations"
          stations={stations}
          limit={5}
        />
      </StationContainer>
    </ContentContainer>
    <About />
    <StationFeatures />
    <SignUpBox />
    <Footer />
  </div>
);
