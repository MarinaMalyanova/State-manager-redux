import { store } from '../store';

export const hanldeRestart = () => {
	const { dispatch } = store;

	dispatch({ type: 'RESTART_GAME' });
};
