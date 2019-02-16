import React, { Component } from 'react';
import Header from '../header/Header';
import Content from '../content/Content';
import Menu from '../menu/Menu';
import './home.css';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Header />
        <div className="content">
          <Menu />
          <Content />
        </div>
      </div>
    );
  }
}

export default Home;
