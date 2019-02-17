import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonIcon } from '@rmwc/button';

import withContext from '../../context/WithContext';
import Clip from './Clip';
import '@material/button/dist/mdc.button.css';
import I18n from '../../i18n';

class ClipList extends Component {
  renderVideoClips() {
    const { context } = this.props;
    const { clips, updateClip } = context;
    return (
      <div>
        {clips.map((clip, index) => (
          <Clip
            key={`clip${index}`}
            clip={clip}
            onClick={updateClip}
          />
        ))}
      </div>
    );
  }

  render() {
    return (
      <div>
        <div className="add-button">
          <Button raised>
            <ButtonIcon icon="add" />
            {I18n.t('clip.add')}
          </Button>
        </div>
        {this.renderVideoClips()}
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
