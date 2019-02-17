import React, { Component } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogButton,
} from '@rmwc/dialog';
import { isEmpty, cloneDeep } from 'lodash';
import '@material/dialog/dist/mdc.dialog.css';
import '@material/button/dist/mdc.button.css';
import PropTypes from 'prop-types';
import { TextField } from '@rmwc/textfield';
import withContext from '../../context/WithContext';

import '@material/textfield/dist/mdc.textfield.css';
import '@material/floating-label/dist/mdc.floating-label.css';
import '@material/notched-outline/dist/mdc.notched-outline.css';
import '@material/line-ripple/dist/mdc.line-ripple.css';
import I18n from '../../i18n';

class ClipDialog extends Component {
  constructor(props) {
    super(props);
    const { context } = this.props;
    const { editingClip } = context;
    this.state = cloneDeep(editingClip);
    // console.warn('editingClip', this.state);
  }

  onChange(event) {
    // eslint-disable-next-line prefer-destructuring
    const state = this.state;
    state[event.target.name] = event.target.value;
    this.setState(state);
  }

  render() {
    const { context } = this.props;
    const {
      id, name, start, end,
    } = this.state;
    const { editingClip, updateEditingClip, addClip } = context;
    return (
      <Dialog
        open={editingClip !== null}
        onClose={(evt) => {
          if (evt.detail.action === 'accept') {
            addClip({
              id,
              name,
              start,
              end,
            });
          }
          updateEditingClip(null);
        }}
      >
        <DialogTitle>{I18n.t('edit.clip.title')}</DialogTitle>
        <DialogContent>
          <TextField
            style={{ width: '100%' }}
            name="name"
            required
            label={`${I18n.t('edit.clip.name')}...`}
            helpText={I18n.t('edit.clip.nameHelp')}
            type="text"
            onChange={(event) => {
              this.onChange(event);
            }}
            value={name}
          />
          <TextField
            style={{ width: '100%' }}
            name="start"
            label={`${I18n.t('edit.clip.start')}...`}
            helpText={I18n.t('edit.clip.startHelp')}
            type="number"
            maxLength={2}
            onChange={(event) => {
              this.onChange(event);
            }}
            min={0}
            max={52}
            value={start}
          />
          <TextField
            style={{ width: '100%' }}
            name="end"
            label={`${I18n.t('edit.clip.end')}...`}
            helpText={I18n.t('edit.clip.endHelp')}
            type="number"
            maxLength={2}
            onChange={(event) => {
              this.onChange(event);
            }}
            min={start}
            max={52}
            value={end}
          />
        </DialogContent>
        <DialogActions>
          <DialogButton
            action="close"
            onClick={() => {
              updateEditingClip(null);
            }}
          >
            {I18n.t('edit.clip.cancel')}
          </DialogButton>
          <DialogButton
            action="accept"
            isDefaultAction
            disabled={start >= end || isEmpty(name)}
          >
            {I18n.t('edit.clip.save')}
          </DialogButton>
        </DialogActions>
      </Dialog>
    );
  }
}

ClipDialog.propTypes = {
  context: PropTypes.object,
};

ClipDialog.defaultProps = {
  context: null,
};

export default withContext(ClipDialog);
