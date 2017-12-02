import React from 'react';
import Banner from './banner';
import RoomSnippetList from './room-snippet-list';

const Home = () => (
  <div style={{ overflow: 'hidden' }}>
    <Banner />
    <RoomSnippetList />
  </div>
);

export default Home;
