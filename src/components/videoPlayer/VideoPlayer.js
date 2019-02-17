import React, { Component } from 'react';

class VideoPlayer extends Component {
  render() {
    return (
      <div className="videoPlayer">
        <video
          src="/videos/video.mp4"
          controls
          // autoPlay
        >
          <track default kind="captions" />
        </video>
      </div>
    );
  }
}

export default VideoPlayer;
