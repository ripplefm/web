import React, { Component } from 'react';
import YouTube from 'react-youtube';

export default class YouTubePlayer extends Component {
  state = {
    started: false,
    playerVars: {
      showinfo: 0,
      controls: 0,
      autoplay: 1,
      disablekb: 1,
      iv_load_policy: 3,
      modestbranding: 1,
      rel: 0,
      start: 0
    }
  };

  componentDidMount() {
    if (this.props.track) {
      this.setState({
        playerVars: {
          ...this.state.playerVars,
          start: this.props.track.current_time / 1000 || 0
        }
      });
    }
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.track &&
      this.props.track &&
      prevProps.track.url !== this.props.track.url
    ) {
      this.setState({
        playerVars: { ...this.state.playerVars, start: 0 }
      });
    }
  }

  render() {
    const { started, playerVars } = this.state;
    const { track, muted } = this.props;
    const { start } = playerVars;

    return (
      <div
        className={`${track === null || track === undefined ? 'hidden' : ''}`}
      >
        <YouTube
          videoId={
            track && track.provider.toLowerCase() === 'youtube'
              ? `${track.url.substring(
                  track.url.indexOf('?v=') + '?v='.length
                )}`
              : ''
          }
          opts={{ playerVars }}
          onReady={e => {
            e.target.setVolume(90);
            if (muted || (!started && window.innerWidth < 768)) {
              e.target.mute();
              this.setState({ started: true });
            }
            if (track && track.timestamp) {
              e.target.seekTo(start);
            } else {
              e.target.playVideo();
            }
          }}
          onPause={e => {
            e.target.playVideo();
            if (!muted && e.target.isMuted()) {
              e.target.setVolume(90);
              e.target.unMute();
            }
          }}
        />
      </div>
    );
  }
}
