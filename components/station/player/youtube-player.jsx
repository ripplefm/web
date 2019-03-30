import React, { Component } from 'react';
import YouTube from 'react-youtube';

export default class YouTubePlayer extends Component {
  state = { started: false, start: 0 };

  componentDidMount() {
    if (this.props.track) {
      this.setState({
        start: Math.abs(this.props.track.timestamp - Date.now()) / 1000
      });
    }
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.track &&
      this.props.track &&
      prevProps.track.name !== this.props.track.name
    ) {
      this.setState({
        start: Math.abs(this.props.track.timestamp - Date.now()) / 1000
      });
    }
  }

  render() {
    const { started, start } = this.state;
    const { track, muted } = this.props;

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
          opts={{
            playerVars: {
              showinfo: 0,
              controls: 0,
              autoplay: 1,
              disablekb: 1,
              iv_load_policy: 3,
              modestbranding: 1,
              rel: 0,
              start
            }
          }}
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
