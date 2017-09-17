export function loginUser(data) {
  var loggedIn = data.username === 'admin' && data.password === 'password'
  return {
    type: 'LOGIN_USER',
    loggedIn
  }
}

export function logoutUser() {
  return {
    type: 'LOGOUT_USER'
  }
}
