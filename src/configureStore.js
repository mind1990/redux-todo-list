import { createStore } from 'redux';
import reducer from './reducers';

function configureStore() {
	const store = createStore(
		reducer,
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	);
	return store;
}

export default configureStore;