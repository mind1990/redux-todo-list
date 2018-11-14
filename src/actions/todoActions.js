import uuid from 'uuid';

export const addTodo = task => {
	return {
		type: 'ADD_TODO',
		todo: {
			id: uuid(),
			task,
			completed: false
		}
	}
}

export const toggleTodo = id => {
	return {
		type: 'TOGGLE_TODO',
		id: uuid()
	}
}