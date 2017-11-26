import React from 'react';
import ResponsivePlayerContainer from './responsive-player-container';
import MutedText from '../../../common/muted-text';
import YouTubePlayer from './youtube-player';

const renderPlayer = track => (
  <ResponsivePlayerContainer>
    {track === undefined || track === null ? (
      <MutedText centered uppercase fontSize="20">
        No Track Playing
      </MutedText>
    ) : null}
    <YouTubePlayer track={track} />
  </ResponsivePlayerContainer>
);

const RoomPlayer = ({ track }) => (
  <div className="room-player">{renderPlayer(track)}</div>
);

export default RoomPlayer;
