import React, { Component } from 'react';
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

class DrawerMenu extends Component {
  render() {
    return (
      <div style={{ flex: 1 }}>
        <Drawer>
          <DrawerHeader>
            <DrawerTitle>DrawerHeader</DrawerTitle>
            <DrawerSubtitle>Subtitle</DrawerSubtitle>
          </DrawerHeader>
          <DrawerContent>
            <List>
              <ListItem>Cookies</ListItem>
              <ListItem>Pizza</ListItem>
              <ListItem>Icecream</ListItem>
              <ListItem>Icecream</ListItem>
              <ListItem>Icecream</ListItem>
              <ListItem>Icecream</ListItem>
              <ListItem>Icecream</ListItem>
            </List>
          </DrawerContent>
        </Drawer>
      </div>
    );
  }
}

export default DrawerMenu;
