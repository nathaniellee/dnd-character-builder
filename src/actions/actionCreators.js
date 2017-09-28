import actionTypes from './actionTypes.js';

export default {
  setCharacterName: name => ({
    type: actionTypes.SET_CHARACTER_NAME,
    payload: { name },
  }),

  setPlayerName: name => ({
    type: actionTypes.SET_PLAYER_NAME,
    payload: { name },
  }),
};
