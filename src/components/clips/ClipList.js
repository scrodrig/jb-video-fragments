import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonIcon } from '@rmwc/button';

import withContext from '../../context/WithContext';
import Clip from './Clip';
import '@material/button/dist/mdc.button.css';
import I18n from '../../i18n';
import ClipDialog from '../dialog/ClipDialog';

const emptyClip = {
  id: 0,
  name: '',
  start: 0,
  end: 0,
};

class ClipList extends Component {
  renderVideoClips() {
    const { context } = this.props;
    const { clips, updateClip, updateEditingClip } = context;
    return (
      <div>
        {clips.map((clip, index) => (
          <Clip
            key={`clip${index}`}
            clip={clip}
            onClick={updateClip}
            onEdit={updateEditingClip}
          />
        ))}
      </div>
    );
  }

  render() {
    const { context } = this.props;
    const { editingClip, updateEditingClip } = context;
    return (
      <div>
        <div className="add-button">
          <Button
            raised
            onClick={() => {
              updateEditingClip(emptyClip);
            }}
          >
            <ButtonIcon
              icon="add"
            />
            {I18n.t('clip.add')}
          </Button>
        </div>
        {this.renderVideoClips()}
        {editingClip !== null ? <ClipDialog /> : null}
      </div>
    );
  }
}

ClipList.propTypes = {
  context: PropTypes.object,
};

ClipList.defaultProps = {
  context: null,
};

export default withContext(ClipList);
