import React, { Component } from 'react';
import {
  Card,
  CardPrimaryAction,
  CardMedia,
  CardActions,
  CardActionIcons,
  CardActionIcon,
} from '@rmwc/card';
import './clip.css';
import '@material/card/dist/mdc.card.css';
import '@material/button/dist/mdc.button.css';
import '@material/icon-button/dist/mdc.icon-button.css';
import PropTypes from 'prop-types';
import timeUtils from '../../utils/timeUtils';
import I18n from '../../i18n';
import colors from '../../style/colors';
import ConfirmationModal from '../dialog/ConfirmationModal';

class Clip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false,
    };
  }

  render() {
    const {
      clip,
      onClick,
      onEdit,
      onDelete,
    } = this.props;
    const { openModal } = this.state;
    return (
      <div className="clip">
        <Card style={{ width: '20rem' }}>
          <CardPrimaryAction
            onClick={() => {
              onClick(clip);
            }}
          >
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
          <CardActions>
            <CardActionIcons>
              <CardActionIcon
                icon="edit"
                style={{
                  color: clip.type === 'full'
                    ? colors.primary100
                    : colors.blue700,
                }}
                onClick={() => {
                  onEdit(clip);
                }}
                disabled={clip.type === 'full'}
              />
              <CardActionIcon
                icon="remove"
                style={{
                  color: clip.type === 'full'
                    ? colors.primary100
                    : colors.secondary300,
                }}
                onClick={() => {
                  this.setState({ openModal: true });
                }}
                disabled={clip.type === 'full'}
              />
            </CardActionIcons>
          </CardActions>
        </Card>

        {openModal
          ? (
            <ConfirmationModal
              clipTitle={clip.name}
              openModal={openModal}
              closeModal={() => {
                this.setState({ openModal: false });
              }}
              accept={() => {
                onDelete(clip);
              }}
            />
          )
          : null}

      </div>
    );
  }
}

Clip.propTypes = {
  clip: PropTypes.object,
  onClick: PropTypes.func,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
};

Clip.defaultProps = {
  clip: null,
  onClick: () => {
  },
  onEdit: () => {
  },
  onDelete: () => {
  },
};

export default Clip;
