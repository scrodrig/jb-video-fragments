import React, { Component } from 'react';
import '@material/top-app-bar/dist/mdc.top-app-bar.css';
import '@rmwc/icon/icon.css';
import {
  TopAppBar,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarNavigationIcon,
  TopAppBarTitle,
} from '@rmwc/top-app-bar';

import I18n from '../../i18n';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <TopAppBar>
          <TopAppBarRow>
            <TopAppBarSection>
              <TopAppBarNavigationIcon icon="menu" />
              <TopAppBarTitle>{I18n.t('header')}</TopAppBarTitle>
            </TopAppBarSection>

            <TopAppBarSection alignEnd>
              <TopAppBarNavigationIcon icon="favorite" />
            </TopAppBarSection>

          </TopAppBarRow>
        </TopAppBar>
      </div>
    );
  }
}

export default Header;
