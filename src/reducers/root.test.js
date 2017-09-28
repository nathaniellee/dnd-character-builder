import actionTypes from '../actions/actionTypes.js';
import initialState from './initialState.js';
import reducer, * as selectors from './root.js';

const characterNameAction = {
  type: actionTypes.SET_CHARACTER_NAME,
  payload: {
    name: 'Gandalf the Gray',
  },
};
const playerNameAction = {
  type: actionTypes.SET_PLAYER_NAME,
  payload: {
    name: 'J.R.R. Tolkien',
  },
};

describe('reducer', () => {
  describe('`SET_CHARACTER_NAME` action', () => {
    it('updates the value in state.', () => {
      const updatedState = reducer(initialState, characterNameAction);
      expect(updatedState.characterName).toEqual('Gandalf the Gray');
    });
  });

  it('returns the correct initial state.', () => {
    expect(reducer()).toEqual(initialState);
  });
});

describe('selectors', () => {
  describe('getCharacterName', () => {
    it('returns the value in state.', () => {
      const updatedState = reducer(initialState, characterNameAction);

      expect(selectors.getCharacterName(initialState)).toEqual(initialState.characterName);
      expect(selectors.getCharacterName(updatedState)).toEqual(updatedState.characterName);
    });
  });

  describe('getPlayerName', () => {
    it('returns the value in state.', () => {
      const updatedState = reducer(initialState, playerNameAction);

      expect(selectors.getPlayerName(initialState)).toEqual(initialState.playerName);
      expect(selectors.getPlayerName(updatedState)).toEqual(updatedState.playerName);
    });
  });
});
