import React, { Component } from 'react';
import './content.css';
import VideoPlayer from '../videoPlayer/VideoPlayer';

class Content extends Component {
  render() {
    return (
      <div className="content">
        <VideoPlayer />
      </div>
    );
  }
}

export default Content;
