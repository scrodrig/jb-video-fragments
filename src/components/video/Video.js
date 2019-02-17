import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withContext from '../../context/WithContext';

class Video extends Component {
  render() {
    const { context } = this.props;
    const { playingClip } = context;
    return (
      <div className="videoPlayer">
        <h3>{playingClip.name}</h3>
        <video
          src={`/videos/video.mp4#t=${playingClip.start},${playingClip.end}`}
          controls
          // autoPlay
        >
          <track default kind="captions" />
        </video>
      </div>
    );
  }
}

Video.propTypes = {
  context: PropTypes.object,
};

Video.defaultProps = {
  context: null,
};

export default withContext(Video);
