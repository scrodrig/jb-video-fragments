import React, { Component } from 'react';
import {
  Card,
  CardPrimaryAction,
  CardMedia,
} from '@rmwc/card';
import './clip.css';
import '@material/card/dist/mdc.card.css';
import '@material/button/dist/mdc.button.css';
import '@material/icon-button/dist/mdc.icon-button.css';
import PropTypes from 'prop-types';
import timeUtils from '../../utils/timeUtils';
import I18n from '../../i18n';

class Clip extends Component {
  render() {
    const { clip, onClick } = this.props;
    return (
      <div className="clip">
        <Card style={{ width: '15rem' }}>
          <CardPrimaryAction onClick={() => { onClick(clip); }}>
            <CardMedia
              style={{
                backgroundImage:
                  'url(/images/asche.jpg)',
              }}
            >
              <div>
                <p className="name ellipsis">
                  {clip.name}
                </p>
                <div className="start ellipsis">
                  {`${I18n.t('clip.start')}: ${timeUtils.formatSecondsToMSS(clip.start)}`}
                </div>
                <div className="end ellipsis">
                  {`${I18n.t('clip.end')}: ${timeUtils.formatSecondsToMSS(clip.end)}`}
                </div>
              </div>
            </CardMedia>
          </CardPrimaryAction>
        </Card>
      </div>
    );
  }
}

Clip.propTypes = {
  clip: PropTypes.object,
  onClick: PropTypes.func,
};

Clip.defaultProps = {
  clip: null,
  onClick: () => {},
};

export default Clip;
