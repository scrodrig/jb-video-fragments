/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

class GlobalProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Hello',
      clip: {
        name: 'Full Video',
        start: 0,
        end: 52,
      },
      clips: [
        {
          name: 'Full Video',
          start: 0,
          end: 52,
        },
        {
          name: 'First part',
          start: 0,
          end: 10,
        },
        {
          name: 'Second part',
          start: 11,
          end: 20,
        },
        {
          name: 'Third part',
          start: 21,
          end: 30,
        },
        {
          name: 'Forth part',
          start: 31,
          end: 40,
        },
      ],
      updateClip: user => this.updateClip(user),
    };
  }

  updateClip(clip) {
    this.setState({ clip }, () => {});
  }

  render() {
    const { children } = this.props;
    const state = {
      state: this.state,
    };
    return (
      <MyContext.Provider value={state}>
        {children}
      </MyContext.Provider>
    );
  }
}

GlobalProvider.propTypes = {
  children: PropTypes.object.isRequired,
};

export default GlobalProvider;
