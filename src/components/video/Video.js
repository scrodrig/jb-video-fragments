/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import { Typography } from '@rmwc/typography';
import withContext from '../../context/WithContext';
import '@material/typography/dist/mdc.typography.css';
import './videoPlayer.css';
import I18n from '../../i18n';
import colors from '../../style/colors';

class Video extends Component {
  componentDidMount() {
    const { context } = this.props;
    const { playingClip } = context;
    const track = document.getElementById('trackC');
    if (playingClip.type === 'full') {
      track.addEventListener('load', () => {
        this.drawMarkers();
      });
    }
  }

  componentDidUpdate() {
    const video = document.getElementById('videoC');
    video.removeEventListener('timeupdate', this.update, false);
    const { context } = this.props;
    const { playingClip } = context;
    if (playingClip.type === 'full') {
      this.drawMarkers();
    }
  }

  drawMarkers() {
    const span = document.getElementsByClassName('marker');
    if (isEmpty(span)) {
      this.addMarkers();
    }
  }

  addMarkers() {
    const video = document.getElementById('videoC');
    const { cues } = video.textTracks[0];
    const controlBar = document.getElementById('bar1');
    for (let index = 0; index < cues.length; index += 1) {
      const spanContainer = this.createMarker(cues, index);
      controlBar.appendChild(spanContainer);
    }
  }

  createMarker(cues, i) {
    const video = document.getElementById('videoC');
    const spanContainer = document.createElement('span');
    spanContainer.innerHTML = cues[i].text;
    spanContainer.setAttribute('class', 'container1');
    const duration = 52;
    const timeWidth = (cues[i].endTime - cues[i].startTime) * video.width / duration;
    spanContainer.setAttribute('style', `width: ${timeWidth}px`);
    spanContainer.setAttribute('data-start', cues[i].startTime);
    spanContainer.addEventListener('click', this.seek);
    video.addEventListener('timeupdate', this.update, false);
    return spanContainer;
  }

  play() {
    const video = document.getElementById('videoC');
    if (video.paused) { video.play(); } else { video.pause(); }
  }

  update() {
    const controlBar = document.getElementById('bar1');
    const video = document.getElementById('videoC');
    const progress = video.currentTime / video.duration * 100;
    controlBar.style.background = `linear-gradient(to right, #E91E63 ${progress}%, #000 ${progress}%)`;
  }

  seek() {
    const video = document.getElementById('videoC');
    video.currentTime = this.getAttribute('data-start');
    if (video.paused) {
      video.play();
    }
  }

  render() {
    const { context } = this.props;
    const { playingClip } = context;
    return (
      <div className="videoPlayer">
        <Typography use="headline2" style={{ color: colors.primary800 }}>
          {I18n.t('clip.title', { clipTitle: playingClip.name })}
        </Typography>
        <video
          id="videoC"
          src={`/videos/video.mp4#t=${playingClip.start},${playingClip.end}`}
          controls
          style={{ paddingTop: '50px' }}
          width="1000"
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
        {playingClip.type === 'full' ? <span id="bar1" /> : null}
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
