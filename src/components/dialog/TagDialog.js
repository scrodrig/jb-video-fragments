import React, { Component } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogButton,
} from '@rmwc/dialog';
import { cloneDeep } from 'lodash';
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
import colors from '../../style/colors';

class TagDialog extends Component {
  constructor(props) {
    super(props);
    const { context } = this.props;
    const { taggingClip } = context;
    this.state = cloneDeep(taggingClip);
  }

  onChange(event) {
    // eslint-disable-next-line prefer-destructuring
    const { tags } = this.state;
    tags[event.target.name] = event.target.value;
    this.setState(tags);
  }

  onCloseHandler(evt) {
    const { context } = this.props;
    const { tags } = this.state;
    const { taggingClip, updateTaggingClip, addClip } = context;
    if (evt.detail.action === 'accept') {
      taggingClip.tags = tags;
      addClip(taggingClip);
    }
    updateTaggingClip(null);
  }

  getTagField(index) {
    const { tags } = this.state;
    return (
      <TextField
        style={{ width: '100%' }}
        name={`${index}`}
        label={`${I18n.t('clip.tags.type')}...`}
        helpText={I18n.t('clip.tags.type')}
        type="text"
        onChange={(event) => {
          this.onChange(event);
        }}
        value={tags[index] || ''}
      />
    );
  }

  render() {
    const { context } = this.props;
    const { taggingClip } = context;
    return (
      <Dialog
        open={taggingClip !== null}
        onClose={(evt) => { this.onCloseHandler(evt); }}
      >
        <DialogTitle>{I18n.t('clip.tags.add')}</DialogTitle>
        <DialogContent>
          {this.getTagField(0)}
          {this.getTagField(1)}
          {this.getTagField(2)}
        </DialogContent>
        <DialogActions>
          <DialogButton
            action="accept"
            style={{
              color: colors.blue700,
            }}
            isDefaultAction
          >
            {I18n.t('edit.clip.save')}
          </DialogButton>
        </DialogActions>
      </Dialog>
    );
  }
}


TagDialog.propTypes = {
  context: PropTypes.object,
};

TagDialog.defaultProps = {
  context: null,
};


export default withContext(TagDialog);
