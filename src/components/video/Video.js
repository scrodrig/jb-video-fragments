import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@rmwc/typography';
import withContext from '../../context/WithContext';
import '@material/typography/dist/mdc.typography.css';
import './videoPlayer.css';
import I18n from '../../i18n';

class Video extends Component {
  render() {
    const { context } = this.props;
    const { playingClip } = context;
    return (
      <div className="videoPlayer">
        <Typography
          use="headline2"
          className="titleVideo"
        >
          {I18n.t('clip.title', { clipTitle: playingClip.name })}
        </Typography>
        <video
          src={`/videos/video.mp4#t=${playingClip.start},${playingClip.end}`}
          controls
          // autoPlay
        >
          <track
            default
            kind="captions"
          />
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
