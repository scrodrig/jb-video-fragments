import React, { Component } from 'react';
import './videoPlayer.css';
import Video from './Video';

class VideoPlayer extends Component {
  render() {
    return (
      <div className="content">
        <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
          <Video />
        </div>
      </div>
    );
  }
}

export default VideoPlayer;
