import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withContext from '../../context/WithContext';

class VideoPlayer extends Component {
  render() {
    const { context } = this.props;
    const { title } = context;
    return (
      <div className="videoPlayer">
        <h3>{title}</h3>
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

VideoPlayer.propTypes = {
  context: PropTypes.object,
};

VideoPlayer.defaultProps = {
  context: null,
};

export default withContext(VideoPlayer);
