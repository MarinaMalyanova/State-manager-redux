import { PLAYER, STATUS } from './constants';
import { createEmptyField } from './utils';
import { checkWin, checkEmptyCell } from './utils';
import {} from './Game';

export const initialState = {
	status: STATUS.TURN,
	currentPlayer: PLAYER.CROSS,
	field: createEmptyField(),
};

export const appReducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'RESTART_GAME': {
			// setStatus(initialState.status);
			// setCurrentPlayer(initialState.currentPlayer);
			// setField(createEmptyField());
			// break;
			// return payload;
			return {
				...state,
				status: STATUS.TURN,
				currentPlayer: PLAYER.CROSS,
				field: createEmptyField(),
			};
		}

		case 'HANDLE_CELL_CLICK': {
			// console.log('state.status', state.status);
			if (
				state.status === STATUS.WIN ||
				state.status === STATUS.DRAW ||
				state.field[payload] !== PLAYER.NOBODY
			) {
				console.log('ничего не делать');
				return { ...state };
			}
			const newField = [...state.field];

			newField[payload] = state.currentPlayer;
			state = {
				...state,
				field: newField,
			};
			// setField(newField);
			// console.log('newField', newField);
			// console.log('payload', payload);

			if (checkWin(newField, state.currentPlayer)) {
				state = {
					...state,
					status: STATUS.WIN,
				};
				// setStatus(STATUS.WIN);
			} else if (checkEmptyCell(newField)) {
				state = {
					...state,
					currentPlayer:
						state.currentPlayer === PLAYER.CROSS
							? PLAYER.NOUGHT
							: PLAYER.CROSS,
				};
				// setCurrentPlayer(state.currentPlayer === PLAYER.CROSS ? PLAYER.NOUGHT : PLAYER.CROSS);
			} else {
				state = {
					...state,
					status: STATUS.DRAW,
				};
				// setStatus(STATUS.DRAW);
			}
			return {
				...state,
			};
		}
		default:
			return state;
	}
};
