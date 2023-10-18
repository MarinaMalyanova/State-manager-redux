import { useState } from 'react';
import { GameLayout } from './game-layout';
import { STATUS, PLAYER } from './constants';
import { handleCellClick, hanldeRestart } from './handlers';
import { createEmptyField } from './utils';

function Game() {
	const [status, setStatus] = useState(STATUS.TURN);
	const [currentPlayer, setCurrentPlayer] = useState(PLAYER.CROSS);
	const [field, setField] = useState(createEmptyField());

	const currentState = {
		status,
		setStatus,
		currentPlayer,
		setCurrentPlayer,
		field,
		setField,
	};

	return (
		<GameLayout
			status={status}
			currentPlayer={currentPlayer}
			field={field}
			handleCellClick={(cellIndex) => handleCellClick(currentState, cellIndex)}
			hanldeRestart={() => hanldeRestart(currentState)}
		/>
	);
}

export default Game;
