import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Chip, ChipSet } from '@rmwc/chip';
import '@material/chips/dist/mdc.chips.css';


class Tags extends Component {
  render() {
    const { tags } = this.props;
    return (
      <div className="Tag">
        <div className="group-chips">
          <ChipSet>
            {tags.map((tag, index) => (
              <Chip key={`${tag}-${index}`} icon="more" label={tag} />
            ))}
          </ChipSet>
        </div>
      </div>
    );
  }
}

Tags.propTypes = {
  tags: PropTypes.array,
};

Tags.defaultProps = {
  tags: [],
};


export default Tags;
