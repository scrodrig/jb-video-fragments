import React, { Component } from 'react';
import { Icon } from '@rmwc/icon';
import {
  Drawer,
  DrawerHeader,
  DrawerContent,
  DrawerTitle,
  DrawerSubtitle,
} from '@rmwc/drawer';
import {
  List,
  ListItem,
} from '@rmwc/list';

import '@material/drawer/dist/mdc.drawer.css';
import '@rmwc/icon/icon.css';
import './drawerMenu.css';
import colors from '../../style/colors';
import I18n from '../../i18n';

class DrawerMenu extends Component {
  render() {
    const iconStyle = { color: colors.secondary300, paddingRight: 10 };
    return (
      <div>
        <Drawer>
          <DrawerHeader>
            <DrawerTitle>{I18n.t('drawer.header')}</DrawerTitle>
            <DrawerSubtitle>{I18n.t('drawer.subtitle')}</DrawerSubtitle>
          </DrawerHeader>
          <DrawerContent>
            <List>
              <ListItem>
                <div className="item">
                  <Icon icon="favorite" style={iconStyle} />
                  <h4>{I18n.t('drawer.favorites')}</h4>
                </div>
              </ListItem>
              <ListItem>
                <div className="item">
                  <Icon icon="search" style={iconStyle} />
                  <h4>{I18n.t('drawer.search')}</h4>
                </div>
              </ListItem>
              <ListItem>
                <div className="item">
                  <Icon icon="lock" style={iconStyle} />
                  <h4>{I18n.t('drawer.account')}</h4>
                </div>
              </ListItem>
            </List>
          </DrawerContent>
        </Drawer>
      </div>
    );
  }
}

export default DrawerMenu;
