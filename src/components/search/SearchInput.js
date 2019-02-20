import React, { Component } from 'react';
import { TextField } from '@rmwc/textfield';

import '@material/textfield/dist/mdc.textfield.css';
import '@material/floating-label/dist/mdc.floating-label.css';
import '@material/notched-outline/dist/mdc.notched-outline.css';
import '@material/line-ripple/dist/mdc.line-ripple.css';
import PropTypes from 'prop-types';
import withContext from '../../context/WithContext';

class SearchInput extends Component {
  render() {
    const { context } = this.props;
    const {
      filteredClip, onChangeFilteredClip, clearFilter,
    } = context;
    return (
      <div className="SearchInput">
        <TextField
          label="trailingIcon..."
          value={filteredClip}
          onChange={(event) => {
            onChangeFilteredClip(event);
          }}
          trailingIcon={{
            icon: 'close',
            onClick: () => clearFilter(),
          }}
        />
      </div>
    );
  }
}

SearchInput.propTypes = {
  context: PropTypes.object,
};

SearchInput.defaultProps = {
  context: null,
};


export default withContext(SearchInput);
