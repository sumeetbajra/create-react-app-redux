const INCREMENT_COUNTER = 'counter/INCREMENT_COUNTER';
const DECREMENT_COUNTER = 'counter/DECREMENT_COUNTER';

const initialState = {
	count: 0
};

export default function counterReducer(state = initialState, action) {
	switch(action.type) {
		case INCREMENT_COUNTER:
			return {
				...state,
				count: state.count + 1
			}

		case DECREMENT_COUNTER:
			return {
				...state,
				count: state.count - 1
			}

		default:
			return {...state};
	}
}

export function incrementAsync() {
	return (dispatch) => {
		setTimeout(function() {
			dispatch({
				type: INCREMENT_COUNTER
			})
		}, 1000)
	}
}

export function increment() {
	return {
		type: INCREMENT_COUNTER
	}
}

export function decrement() {
	return {
		type: DECREMENT_COUNTER
	}
}