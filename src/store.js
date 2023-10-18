import { appReducer } from './reducer';

const createStore = (reducer) => {
	let state;
	const subscribers = [];

	return {
		dispatch: (action) => {
			state = reducer(state, action);
			subscribers.forEach((sub) => sub());

			console.log('state', state);
		},
		subscribe(callback) {
			subscribers.push(callback);
		},
		getState: () => state,
	};
};

export const store = createStore(appReducer);

store.dispatch({ type: 'INITIAL' });
