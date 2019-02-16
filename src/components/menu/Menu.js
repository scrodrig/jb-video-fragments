import React, { Component } from 'react';
import DrawerMenu from '../drawer/DrawerMenu';
import './menu.css';

class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <DrawerMenu />
      </div>
    );
  }
}

export default Menu;
