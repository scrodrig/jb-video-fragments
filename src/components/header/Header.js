import React, { Component } from 'react';
import '@material/toolbar/dist/mdc.toolbar.css';

import {
  Toolbar,
  ToolbarRow,
  ToolbarTitle,
} from '@rmwc/toolbar';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <Toolbar>
          <ToolbarRow>
            <ToolbarTitle>Toolbar</ToolbarTitle>
          </ToolbarRow>
        </Toolbar>
      </div >
    );
  }
}

export default Header;
