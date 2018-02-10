import React from 'react';
import Banner from './banner';
import StationSnippetList from './station-snippet-list';

const Home = () => (
  <div style={{ overflow: 'hidden' }}>
    <Banner />
    <StationSnippetList />
  </div>
);

export default Home;
