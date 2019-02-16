import React, { Component } from 'react';
import Menu from '../menu/menu';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <Menu />
      </div>
    );
  }
}

export default Header;
