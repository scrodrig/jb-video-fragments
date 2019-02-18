import React, { Component } from 'react';
import {
  Card,
  CardMedia,
} from '@rmwc/card';
import { Typography } from '@rmwc/typography';
import colors from '../../style/colors';
import I18n from '../../i18n';
import '@material/card/dist/mdc.card.css';
import '@material/button/dist/mdc.button.css';
import '@material/icon-button/dist/mdc.icon-button.css';
import '@material/typography/dist/mdc.typography.css';
import './shortcut.css';

class ShortcutCard extends Component {
  render() {
    return (
      <div>
        <Card>
          <CardMedia style={{ backgroundColor: colors.secondary500 }}>
            <div>
              <p className="shortcut">
                <Typography use="button" className="titleVideo">{I18n.t('clip.next')}</Typography>
              </p>
              <div className="shortcut">
                <Typography use="button" className="titleVideo">{I18n.t('clip.previous')}</Typography>
              </div>
            </div>
          </CardMedia>
        </Card>
      </div>
    );
  }
}

export default ShortcutCard;
