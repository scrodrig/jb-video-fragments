import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withContext from '../../context/WithContext';

class VideoPlayer extends Component {
  render() {
    const { context } = this.props;
    const { clip } = context;
    return (
      <div className="videoPlayer">
        <h3>{clip.name}</h3>
        <video
          src={`/videos/video.mp4#t=${clip.start},${clip.end}`}
          controls
          // autoPlay
        >
          <track default kind="captions" />
        </video>
      </div>
    );
  }
}

VideoPlayer.propTypes = {
  context: PropTypes.object,
};

VideoPlayer.defaultProps = {
  context: null,
};

export default withContext(VideoPlayer);
