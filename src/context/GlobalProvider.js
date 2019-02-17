/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import { size, cloneDeep, head } from 'lodash';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

const fullVideoClip = {
  id: 1,
  name: 'Full Video',
  type: 'full',
  start: 0,
  end: 52,
};

class GlobalProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Hello',
      playingClip: fullVideoClip,
      editingClip: null,
      clips: [
        fullVideoClip,
        {
          id: 2,
          name: 'First part',
          type: 'fragment',
          start: 0,
          end: 10,
        },
        {
          id: 3,
          name: 'Second part',
          type: 'fragment',
          start: 22,
          end: 35,
        },
        {
          id: 4,
          name: 'Third part',
          type: 'fragment',
          start: 36,
          end: 52,
        },
      ],
      updateClip: clip => this.updateClip(clip),
      updateEditingClip: clip => this.updateEditingClip(clip),
      addClip: clip => this.addClip(clip),
    };
  }

  addClip(editingClip) {
    const { clips } = this.state;
    if (editingClip.id === 0) {
      this.addClipQueue(clips, editingClip);
    } else {
      this.updateClipQueue(clips, editingClip);
    }
  }

  updateClipQueue(clips, editingClip) {
    const restult = clips.map(obj => [editingClip].find(o => o.id === obj.id) || obj);
    this.setState({ clips: restult }, () => {
    });
  }

  addClipQueue(clips, editingClip) {
    const clip = cloneDeep(editingClip);
    clip.id = size(clips) + 1;
    clip.type = 'fragment';
    clips.push(clip);
    this.setState({ clips }, () => {
      this.updateClip(head(clips));
    });
  }

  updateEditingClip(editingClip) {
    this.setState({ editingClip }, () => {});
  }

  updateClip(playingClip) {
    this.setState({ playingClip }, () => {});
  }

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

GlobalProvider.propTypes = {
  children: PropTypes.object.isRequired,
};

export default GlobalProvider;
