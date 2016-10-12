import { browserHistory } from 'react-router';

const initialState = {
	username: null,
	authToken: null,
	loginError: null
}

export function userReducer(state=initialState, action) {
	switch (action.type) {

		case 'LOGIN_SUCCESS':
			browserHistory.push('/');
			return {
				...state,
				username: action.username,
				authToken: action.authToken,
				loginError: null
			}

		case 'LOGIN_FAILURE':
			return {
				...state,
				username: null,
				authToken: null,
				loginError: action.error
			}

		case 'RESET_LOGIN_ERROR':
			return {
				...state,
				loginError: null
			}

		case 'LOGOUT':
			return {
				...state,
				username: null,
				authToken: null,
			}

		default:
			return {...state}
	}
}