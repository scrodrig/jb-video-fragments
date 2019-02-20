[![codebeat badge](https://codebeat.co/badges/896f4805-305a-4143-a1d8-ac2163e31c4b)](https://codebeat.co/projects/github-com-scrodrig-jb-video-fragments-master)
[![Build Status](https://travis-ci.org/scrodrig/jb-video-fragments.svg?branch=master)](https://travis-ci.org/scrodrig/jb-video-fragments)
[![node](https://img.shields.io/npm/v/npm.svg?style=flat)](https://github.com/scrodrig/jb-video-fragments)
[![license](https://img.shields.io/github/license/scrodrig/jb-video-fragments.svg?style=flat)](https://github.com/scrodrig/jb-video-fragments)
# **jb-video-fragments**

Welcome to an example of Video Fragments Media with ReactJS, in order to make the project, please
follow this steps

### Clone project
`$ git clone https://github.com/scrodrig/jb-video-fragments.git`

### Install dependencies
`$ npm install`

### Start the project
`$ npm start`

After executing RUN command, please go to:

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## Other commands to check

### Run tests
`$ npm test`

### Run linter ESLint
`$ npm run lint`




## Features checklist 
#### Mandatory

- [x] An HTML5 video player that utilizes media fragments
- [x] A list of clips to be played in the video player
- [x] The first item in the list should be the full video
- [x] An interface to add new clips to the list by specifying a name, start time, and end time
- [x] The ability to delete clips from the list (excluding the full video item)
- [x] The ability to edit existing clips in the list
- [x] The ability to play clips in the video player


#### Bonus Listed (Optional)

- [x] Hotkeys to jump between the current clip and next and previous clips (if there are any)
- [x] The ability to add arbitrary ‘tags’ to clips so that they can be filtered by the tag name
- [x] Markers on the video player (full video only)
- [x] Markers on the video player timeline that denote where a clip starts (full video only)
- [x] Clicking the marker chooses that clip and plays it from that point
- [x] The ability to reuse the the player and playlist on another page without the editing capabilities
- [ ] The ability to automatically jump to the next clip after it finishes, with a 3 second waiting period and appropriate loading animation.
- [ ] The ability to ‘save’ clips for persistent use.

#### Bonus Not Listed (Optional)
- [x] Use CI/CD Tool to run  tests and linter [Badge](https://travis-ci.org/scrodrig/jb-video-fragments)
- [x] Use analysis tool [Badge](https://codebeat.co/projects/github-com-scrodrig-jb-video-fragments-master)
