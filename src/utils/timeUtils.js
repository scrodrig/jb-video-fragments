/* eslint-disable */
/* formatter extracted from:
https://stackoverflow.com/questions/3733227/javascript-seconds-to-minutes-and-seconds
by GitaarLAB
*/
const formatSecondsToMSS = s => (s - (s %= 60)) / 60 + (s > 9 ? ':' : ':0') + s;

const timeUtils = {
  formatSecondsToMSS,
};

export default timeUtils;
