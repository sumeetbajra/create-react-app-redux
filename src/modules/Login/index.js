import React, { Component } from 'react';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';

import {loginUser, logoutUser} from '../../actions/userActions';

class LoginPage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
		}
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.loginUser(this.state);
	}

	handleLogout = (e) => {
		e.preventDefault();
		this.props.logoutUser();
	}

	render() {
		return (
			<div className="container">
				{this.props.loggedIn ?

					<div>
						<h1> Welcome to react </h1>
						<button onClick={this.handleLogout}> logout </button>
					</div> :
					<div>
						<h3>Login</h3><br />
						<form>
							Username: <input name='username' type='text' value={this.state.username} onChange={this.handleChange} /><br />
							password: <input name='password' type='password' value={this.state.password} onChange={this.handleChange}/><br />
							<button onClick={this.handleSubmit.bind(this)}> login </button>

						</form>
					</div>
				}
				{this.props.message && <p> {this.props.message} </p>}
				<p className="well">This is a sample registration page. You can edit <code>src/modules/Login/index.js</code> to edit this page.</p>
			</div>
		);
	}
}

const mapStateToProps = (store) => {
	return {
		loggedIn: store.user.loggedIn,
		message: store.user.loginError
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		loginUser,
		logoutUser
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
