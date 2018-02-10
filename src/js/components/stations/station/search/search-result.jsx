import React from 'react';
import styled from 'react-emotion';
import { Dropdown, Icon, Menu } from 'antd';
import ResultArtwork from './search-result-artwork';
import MenuItem from '../../../common/menu-item';
import MutedText from '../../../common/muted-text';

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

const SearchResult = ({ track, onAddToQueue, onAddToPlaylist, onPreview }) => (
  <ResultContainer>
    <ResultArtwork src={track.artworkUrl} duration={track.duration} />
    <div style={{ padding: '8px', flex: '1' }}>
      <h3>{track.title}</h3>
      <MutedText fontSize="14">
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
