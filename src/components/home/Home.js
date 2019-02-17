import React, { Component } from 'react';
import Header from '../header/Header';
import VideoPlayer from '../video/VideoPlayer';
import Menu from '../menu/Menu';
import './home.css';
import Panel from '../panel/Panel';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Header />
        <div className="content">
          <Menu />
          <VideoPlayer />
          <Panel />
        </div>
      </div>
    );
  }
}

export default Home;
