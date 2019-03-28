import React from 'react';
import styled from '@emotion/styled';
import DashboardBanner from './dashboard-banner';
import StationSnippetList from '../../../common/station-snippet-list';

const ContentContainer = styled.div`
  padding: 16px;
  padding-right: 0px;

  @media (max-width: 768px) {
    padding: 0px;
  }
`;

export default ({ featuredStation, popularStations, followingStations }) => (
  <div>
    <DashboardBanner station={featuredStation} />
    <ContentContainer>
      <StationSnippetList title="Popular Stations" stations={popularStations} />
      <StationSnippetList title="Following" stations={followingStations} />
    </ContentContainer>
  </div>
);
