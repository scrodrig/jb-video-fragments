import React, { Component } from 'react';
import PropTypes from 'prop-types';

import withContext from '../../context/WithContext';
import Clip from './Clip';

class ClipList extends Component {
  render() {
    const { context } = this.props;
    const { clips } = context;
    return (
      <div className="clipList">
        {clips.map((clip, index) => (
          <Clip key={`clip${index}`} clip={clip} />
        ))}
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
