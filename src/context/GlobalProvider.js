/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import {
  size,
  cloneDeep,
  head,
  remove,
  findIndex,
  isNull,
  isEmpty,
  sample,
  filter,
  union,
  includes,
  lowerCase,
} from 'lodash';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

const thumbnail1 = '/images/thumbnails/coimbra.jpg';
const thumbnail2 = '/images/thumbnails/leiria.jpg';
const thumbnail3 = '/images/thumbnails/oporto.jpg';
const thumbnail4 = '/images/thumbnails/peniche.jpg';
const thumbnail5 = '/images/thumbnails/sintra.jpg';

const fullVideoClip = {
  id: 1,
  name: 'Full Video',
  type: 'full',
  thumbnail: thumbnail4,
  start: 0,
  end: 52,
};

class GlobalProvider extends Component {
  static assignThumbnail() {
    const thumbnails = [thumbnail1, thumbnail2, thumbnail3, thumbnail4, thumbnail5];
    return sample(thumbnails);
  }

  constructor(props) {
    super(props);
    this.state = {
      filteredClip: '',
      playingClip: fullVideoClip,
      editingClip: null,
      taggingClip: null,
      clips: [
        {
          id: 2,
          name: 'First part',
          type: 'fragment',
          tags: ['First', 'Part'],
          thumbnail: thumbnail1,
          start: 0,
          end: 10,
        },
        {
          id: 3,
          name: 'Second part',
          type: 'fragment',
          tags: ['Second', 'Part'],
          thumbnail: thumbnail2,
          start: 22,
          end: 35,
        },
        {
          id: 4,
          name: 'Third part',
          type: 'fragment',
          tags: ['Third'],
          thumbnail: thumbnail3,
          start: 36,
          end: 52,
        },
      ],
      updateClip: clip => this.updateClip(clip),
      nextClip: () => this.nextClip(),
      previousClip: () => this.previousClip(),
      updateTaggingClip: clip => this.updateTaggingClip(clip),
      updateEditingClip: clip => this.updateEditingClip(clip),
      deleteEditingClip: clip => this.deleteEditingClip(clip),
      addClip: clip => this.addClip(clip),
      getClips: () => this.getClips(),
      clearFilter: () => this.clearFilter(),
      onChangeFilteredClip: filteredClip => this.onChangeFilteredClip(filteredClip),
    };
  }

  onChangeFilteredClip(event) {
    this.setState({ filteredClip: event.target.value });
  }

  getClips() {
    const { clips, filteredClip } = this.state;
    if (isEmpty(filteredClip)) {
      return union([fullVideoClip], clips);
    }
    const filteredClips = filter(clips,
      clip => includes(lowerCase(clip.tags), lowerCase(filteredClip)));
    return union([fullVideoClip], filteredClips);
  }

  clearFilter() {
    this.setState({ filteredClip: '' });
  }

  nextClip() {
    const { playingClip } = this.state;
    const clips = this.getClips();
    const nextClipPosition = findIndex(clips, clip => playingClip.id === clip.id) + 1;
    const nextClip = clips[nextClipPosition];
    if (!isNull(nextClip) && !isEmpty(nextClip)) {
      this.updateClip(nextClip);
    }
  }

  previousClip() {
    const { playingClip } = this.state;
    const clips = this.getClips();
    const previousClipPosition = findIndex(clips, clip => playingClip.id === clip.id) - 1;
    const nextClip = clips[previousClipPosition];
    if (!isNull(nextClip) && !isEmpty(nextClip)) {
      this.updateClip(nextClip);
    }
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
    const result = clips.map(obj => [editingClip].find(o => o.id === obj.id) || obj);
    this.setState({ clips: result }, () => {
      this.updateClip(fullVideoClip);
    });
  }

  deleteEditingClip(removingClip) {
    const { clips } = this.state;
    const result = remove(clips, clip => clip.id !== removingClip.id);
    this.setState({ clips: result }, () => {
      this.updateClip(fullVideoClip);
    });
  }

  addClipQueue(clips, editingClip) {
    const clip = cloneDeep(editingClip);
    clip.id = size(clips) + (new Date()).getTime();
    clip.type = 'fragment';
    clip.tags = [];
    clip.thumbnail = GlobalProvider.assignThumbnail();
    clips.push(clip);
    this.setState({ clips }, () => {
      this.updateClip(head(clips));
    });
  }

  updateEditingClip(editingClip) {
    this.setState({ editingClip }, () => {
    });
  }

  updateTaggingClip(taggingClip) {
    this.setState({ taggingClip }, () => {
    });
  }

  updateClip(playingClip) {
    this.setState({ playingClip }, () => {
    });
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
