import CommonConstants from '../constants/CommonConstants';

function loginSuccess(payload) {
	return {
		type: 'LOGIN_SUCCESS',
		username: payload.email,
		authToken: Math.random().toString(36).substr(2)
	}
}

function loginFailure() {
	return {
		type: 'LOGIN_FAILURE',
		error: CommonConstants.ERROR_CONSTANTS['INVALID_USERNAME_PASSWORD']
	}
}

function resetLoginError() {
	return {
		type: 'RESET_LOGIN_ERROR',
	}
}

export function login(payload) {
	//perform some ajax request to check username and password
	return (dispatch) => {
		dispatch(resetLoginError());
		const email = "admin@gmail.com";
		const password = "password";

		setTimeout(function() {
			if(payload.email === email && payload.password === password) {
				dispatch(loginSuccess(payload));
			}else {
				dispatch(loginFailure());
			}	
		}, 2000);
	}
}

export function logout() {
	return {
		type: 'LOGOUT'
	}
}