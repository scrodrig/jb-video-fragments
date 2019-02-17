/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import MyContext from './MyContext';

class GlobalProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Hello',
      clips: [
        {
          name: 'Full Video',
        },
      ],
      // updateUser: user => this.updateUser(user),
    };
  }

  // updateUser(user: User) {
  //   this.setState({ user }, () => {});
  // }

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

export default GlobalProvider;
