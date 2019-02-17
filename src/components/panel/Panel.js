import React, { Component } from 'react';
import './panel.css';
import ClipList from '../clips/ClipList';

class Panel extends Component {
  render() {
    return (
      <div className="panel border-panel">
        <ClipList />
      </div>
    );
  }
}

export default Panel;
