import { store } from '../store';

export const handleCellClick = ({ setField, setStatus, setCurrentPlayer }, cellIndex) => {
	store.dispatch({ type: 'HANDLE_CELL_CLICK', payload: cellIndex });
	setField(store.getState().field);

	store.subscribe(() => setCurrentPlayer(store.getState().currentPlayer));
	store.subscribe(() => setField(store.getState().field));
	store.subscribe(() => setStatus(store.getState().status));
};
