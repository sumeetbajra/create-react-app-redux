const initialState = {
	loggedIn: false,
	message: ''
}

export function userReducer(state=initialState, action) {
	switch (action.type) {

		case 'LOGIN_USER':
			return {
				...state,
				loggedIn: action.loggedIn,
				message: action.loggedIn ? '' : 'Invalid username or password'
			}

		case 'LOGOUT_USER':
			return {
				...state,
				loggedIn: false
			}

		default:
			return {...state}
	}
}
