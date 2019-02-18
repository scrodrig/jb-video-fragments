/* eslint-disable jsx-a11y/media-has-caption */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import { Typography } from '@rmwc/typography';
import withContext from '../../context/WithContext';
import '@material/typography/dist/mdc.typography.css';
import './videoPlayer.css';
import I18n from '../../i18n';

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
    const controlBar = document.getElementById('bar');
    for (let index = 0; index < cues.length; index += 1) {
      const spanContainer = this.createMarker(cues, index);
      controlBar.appendChild(spanContainer);
    }
  }

  createMarker(cues, i) {
    const spanContainer = document.createElement('span');
    spanContainer.innerHTML = `<span class="arrow"></span>
                                <span class="marker">${cues[i].text}</span>`;
    // spanContainer.innerText = `${<Marker title={cues[i].text} />}`;
    spanContainer.setAttribute('class', 'container');
    spanContainer.setAttribute('data-start', cues[i].startTime);
    spanContainer.addEventListener('click', this.seek);
    return spanContainer;
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
        <Typography
          use="headline2"
          style={{
            paddingBottom: '50px',
          }}
        >
          {I18n.t('clip.title', { clipTitle: playingClip.name })}
        </Typography>
        <video
          id="videoC"
          src={`/videos/video.mp4#t=${playingClip.start},${playingClip.end}`}
          // controls
          autoPlay
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
