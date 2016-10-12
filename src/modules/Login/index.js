import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { LoginForm } from './LoginForm';

import './style.css';
import { login } from '../../actions/userActions';

class LoginPage extends Component {

	render() {
		return (
			<LoginForm login={this.props.login} loginError={this.props.loginError}/>
		);
	}
}

const mapStateToProps = (store) => {
	return {
		loginError: store.user.loginError
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		login: bindActionCreators(login, dispatch),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);