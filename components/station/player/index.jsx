import React from 'react';
import ResponsivePlayerContainer from './responsive-player-container';
import MutedText from '../../common/muted-text';
import YouTubePlayer from './youtube-player';

const Player = ({ track, muted }) => (
  <ResponsivePlayerContainer>
    {track === undefined || track === null ? (
      <MutedText centered uppercase fontSize="20">
        No Track Playing
      </MutedText>
    ) : null}
    <YouTubePlayer track={track} muted={muted} />
  </ResponsivePlayerContainer>
);

export default ({ track, muted }) => (
  <div className="station-player">
    <Player track={track} muted={muted} />
  </div>
);
