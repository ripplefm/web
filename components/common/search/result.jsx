import React from 'react';
import styled from '@emotion/styled';
import { Dropdown, Icon, Menu } from 'antd';
import ResultArtwork from './result-artwork';
import MenuItem from '../menu-item';
import MutedText from '../muted-text';

const renderDropdown = (track, onAddToQueue, onAddToPlaylist, onPreview) => (
  <Menu
    selectable={false}
    onClick={({ key }) => {
      if (key === 'addQueue') {
        onAddToQueue(track);
      } else if (key === 'addPlaylist') {
        onAddToPlaylist(track);
      } else if (key === 'preview') {
        onPreview(track);
      }
    }}
  >
    <MenuItem key="addQueue">Add to Queue</MenuItem>
    <MenuItem key="addPlaylist" disabled>
      Add to Playlist
    </MenuItem>
    <MenuItem key="preview" disabled>
      Preview
    </MenuItem>
  </Menu>
);

const ResultContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 80px;
  padding: 8px;
  margin: 16px 0px;

  &:first-of-type {
    margin-top: 0px;
  }
`;

const TitleContainer = styled.h3`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 1em;
  width: calc(25vw - 80px / 0.5625);
  max-width: calc(25vw - 80px / 0.5625);

  @media (max-width: 1650px) {
    width: calc(20vw - 80px / 0.5625);
    max-width: calc(20vw - 80px / 0.5625);
  }

  @media (max-width: 768px) {
    width: calc(100vw - 80px / 0.5625 - 100px);
    max-width: calc(100vw - 80px / 0.5625 - 100px);
  }
`;

const decodeHtmlEntities = text => {
  const tmp = document.createElement('textarea');
  tmp.innerHTML = text;
  return tmp.value;
};

const SearchResult = ({ track, onAddToQueue, onAddToPlaylist, onPreview }) => (
  <ResultContainer>
    <ResultArtwork src={track.artworkUrl} duration={track.duration} />
    <div style={{ padding: '8px', flex: '1' }}>
      <TitleContainer>{decodeHtmlEntities(track.title)}</TitleContainer>
      <MutedText fontSize="12">
        by <b>{track.poster}</b>
      </MutedText>
    </div>
    <Dropdown
      overlay={renderDropdown(track, onAddToQueue, onAddToPlaylist, onPreview)}
      trigger={['click']}
    >
      <Icon
        style={{
          cursor: 'pointer',
          fontSize: '22px',
          alignSelf: 'center',
          marginRight: '4px'
        }}
        type="plus"
      />
    </Dropdown>
  </ResultContainer>
);

export default SearchResult;
