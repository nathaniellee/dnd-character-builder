import actionTypes from './actionTypes.js';
import actionCreators from './actionCreators.js';

describe('action creators', () => {
  describe('setCharacterName', () => {
    it('returns the correct action.', () => {
      const expectedAction = {
        type: actionTypes.SET_CHARACTER_NAME,
        payload: {
          name: 'Elminster',
        },
      };

      expect(actionCreators.setCharacterName('Elminster')).toEqual(expectedAction);
    });
  });

  describe('setPlayerName', () => {
    it('returns the correct action.', () => {
      const expectedAction = {
        type: actionTypes.SET_PLAYER_NAME,
        payload: {
          name: 'Ed Greenwood',
        },
      };

      expect(actionCreators.setPlayerName('Ed Greenwood')).toEqual(expectedAction);
    });
  });
});
