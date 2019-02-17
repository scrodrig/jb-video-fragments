import React, { Component } from 'react';
import './videoPlayer.css';
import Video from './Video';

class VideoPlayer extends Component {
  render() {
    return (
      <div className="content">
        <Video />
      </div>
    );
  }
}

export default VideoPlayer;
