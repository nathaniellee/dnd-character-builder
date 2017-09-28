import { combineReducers } from 'redux';
import actionTypes from '../actions/actionTypes.js';
import initialState from './initialState.js';

const characterName = (state = initialState.characterName, action = {}) => {
	const { payload, type } = action;

	switch (type) {
		case actionTypes.SET_CHARACTER_NAME: {
			return payload.name;
		}

		default: {
			return state;
		}
	}
};

const playerName = (state = initialState.playerName, action = {}) => {
	const { payload, type } = action;

	switch (type) {
		case actionTypes.SET_PLAYER_NAME: {
			return payload.name;
		}

		default: {
			return state;
		}
	}
};

export default combineReducers({
	characterName,
	playerName,
});

export const getCharacterName = state => state.characterName;
export const getPlayerName = state => state.playerName;
