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
import ShortcutCard from '../shortcuts/ShortcutCard';

const iconStyle = { color: colors.secondary300, paddingRight: 10 };
class DrawerMenu extends Component {
  static getDrawerHeader() {
    return (
      <DrawerHeader>
        <DrawerTitle>{I18n.t('drawer.header')}</DrawerTitle>
        <DrawerSubtitle>{I18n.t('drawer.subtitle')}</DrawerSubtitle>
      </DrawerHeader>
    );
  }


  static getList() {
    return (
      <List>
        {DrawerMenu.getListItem('favorite', I18n.t('drawer.favorites'))}
        {DrawerMenu.getListItem('search', I18n.t('drawer.search'))}
        {DrawerMenu.getListItem('lock', I18n.t('drawer.account'))}
      </List>
    );
  }

  static getListItem(icon, text) {
    return (
      <ListItem>
        <div className="item">
          <Icon
            icon={icon}
            style={iconStyle}
          />
          <h4>{text}</h4>
        </div>
      </ListItem>
    );
  }

  render() {
    return (
      <div>
        <Drawer>
          {DrawerMenu.getDrawerHeader()}
          <DrawerContent>
            {DrawerMenu.getList(iconStyle)}
          </DrawerContent>
        </Drawer>
        <ShortcutCard />
      </div>
    );
  }
}

export default DrawerMenu;
