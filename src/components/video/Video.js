/* eslint-disable jsx-a11y/media-has-caption */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@rmwc/typography';
import withContext from '../../context/WithContext';
import '@material/typography/dist/mdc.typography.css';
import './videoPlayer.css';
import I18n from '../../i18n';

class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: [],
    };
  }

  componentDidMount() {
    this.drawMarkers();
  }

  drawMarkers() {
    const { context } = this.props;
    const { playingClip } = context;
    if (playingClip.type === 'full') {
      const track = document.getElementById('trackC');
      const video = document.getElementById('videoC');
      const controlBar = document.getElementById('bar');
      track.addEventListener('load', () => {
        const c = video.textTracks[0].cues;
        for (let i = 0; i < c.length; i++) {
          const s = document.createElement('span');
          s.innerHTML = c[i].text;
          s.setAttribute('data-start', c[i].startTime);
          s.addEventListener('click', this.seek);
          controlBar.appendChild(s);
        }
      });
    }
  }

  seek() {
    const video = document.getElementById('videoC');
    video.currentTime = this.getAttribute('data-start');
    if (video.paused) { video.play(); }
  }

  render() {
    const { context } = this.props;
    const { playingClip } = context;
    return (
      <div className="videoPlayer">
        <Typography
          use="headline2"
          style={{
            paddingBottom: '100px',
          }}
        >
          {I18n.t('clip.title', { clipTitle: playingClip.name })}
        </Typography>
        <video
          id="videoC"
          src={`/videos/video.mp4#t=${playingClip.start},${playingClip.end}`}
          controls
          // autoPlay
        >
          <track
            id="trackC"
            src="videos/markers/chapters.vtt"
            kind="chapters"
            default
          />
          <track
            src="videos/markers/chapters.vtt"
            kind="subtitles"
            default
          />
        </video>
        {playingClip.type === 'full' ? <div id="bar" /> : null}

        {/* <div> */}
        {/* {this.state.markers.map(marker => ( */}
        {/* <span className="marker"> */}
        {/* {marker.text} */}
        {/* </span> */}
        {/* ))} */}
        {/* </div> */}

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
