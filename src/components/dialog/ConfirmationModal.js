import React, { Component } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogButton,
} from '@rmwc/dialog';
import '@material/dialog/dist/mdc.dialog.css';
import '@material/button/dist/mdc.button.css';
import PropTypes from 'prop-types';
import I18n from '../../i18n';
import colors from '../../style/colors';

class ConfirmationModal extends Component {
  render() {
    const {
      openModal, closeModal, accept, clipTitle,
    } = this.props;
    return (
      <div className="confirmationModal">
        <Dialog
          open={openModal}
          onClose={(evt) => {
            if (evt.detail.action === 'accept') {
              accept();
            }
            closeModal();
          }}
        >
          <DialogTitle>{I18n.t('edit.clip.deleteTitle')}</DialogTitle>
          <DialogContent>
            {I18n.t('edit.clip.confirmationDelete', { clipTitle })}
          </DialogContent>
          <DialogActions>
            <DialogButton
              action="close"
            >
              {I18n.t('edit.clip.cancel')}
            </DialogButton>
            <DialogButton
              action="accept"
              isDefaultAction
              style={{
                color: colors.secondary400,
              }}
            >
              {I18n.t('edit.clip.confirm')}
            </DialogButton>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

ConfirmationModal.propTypes = {
  clipTitle: PropTypes.string,
  openModal: PropTypes.bool,
  closeModal: PropTypes.func,
  accept: PropTypes.func,
};

ConfirmationModal.defaultProps = {
  clipTitle: 'NONE',
  openModal: false,
  closeModal: () => {},
  accept: () => {},
};


export default ConfirmationModal;
