import React, { Component } from 'react';
import './marker.css';
import PropTypes from 'prop-types';

class Marker extends Component {
  render() {
    const { title } = this.props;
    return (
      <div className="Marker">
        <span className="side-container">
          <span className="side-arrow" />
          <span className="side-marker">{title}</span>
        </span>
      </div>
    );
  }
}

Marker.propTypes = {
  title: PropTypes.string,
};

Marker.defaultProps = {
  title: '',
};

export default Marker;
