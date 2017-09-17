const initialState = {
	loggedIn: false,
	loginError: ''
}

export function userReducer(state=initialState, action) {
	switch (action.type) {

		case 'LOGIN_USER_SUCCESS':
			return {
				...state,
				loggedIn: true,
				loginError: ''
			}
		
		case 'LOGIN_USER_FAIL':
			return {
				...state,
				loggedIn: false,
				loginError: action.error
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
