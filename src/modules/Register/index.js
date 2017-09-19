import React, { Component } from 'react';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';

import {registerUser} from '../../actions/userActions';


class RegisterPage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			email: '',
			phoneNumber: '',
			username: '',
			password: ''
		}
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleRegister = (e) => {
		e.preventDefault();
		this.props.registerUser(this.state);
	}
	render() {
		return (
			<div className="container">
				<h3>Register</h3><br />
				<form>
					Email: <input name='email' type='email' value={this.state.email} onChange={this.handleChange} /> <br />
					Phone no.: <input name='phoneNumber' type='text' value={this.state.phoneNumber} onChange={this.handleChange} /> <br />
					Username: <input name='username' type='text' value={this.state.username} onChange={this.handleChange} /><br />
					password: <input name='password' type='password' value={this.state.password} onChange={this.handleChange} /><br />
					<button onClick={this.handleRegister}> Register </button>

				</form>
				<p className="well">This is a sample registration page. You can edit <code>src/modules/Register/index.js</code> to edit this page.</p>
			</div>
		);
	}
}

const mapStateToProps = (store) => {
	return {
		registered: store.user.registered,
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		registerUser,
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage)
