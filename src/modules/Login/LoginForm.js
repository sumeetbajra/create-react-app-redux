import React, { Component } from 'react';

export class LoginForm extends Component {

	constructor(props) {
		super(props);
		this.state = {
			loading: false
		}
	}

	login = (e) => {
		this.setState({
			loading: true
		})
		e.preventDefault();
		const loginPayload = {
			email: document.getElementById('email').value,
			password: document.getElementById('password').value,
		}
		this.props.login(loginPayload);
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.loginError) {
			this.setState({
				loading: false
			})
		}
	}

	render() {
		return (
			<div className="container-fluid" id="login-form">
			    <div className="row">
			        <div className="col-md-4 col-md-offset-4">
			    		<div className="panel panel-default">
						  	<div className="panel-heading">
						    	<h3 className="panel-title">Please sign in</h3>
						 	</div>
						  	<div className="panel-body">
						    	<form acceptCharset="UTF-8" role="form">
						    	{this.props.loginError && <div className="alert alert-danger">{this.props.loginError}</div>}
			                    <fieldset>
						    	  	<div className="form-group">
						    		    <input id="email" className="form-control" placeholder="E-mail" name="email" type="text" defaultValue="admin@gmail.com" />
						    		</div>
						    		<div className="form-group">
						    			<input id="password" className="form-control" placeholder="Password" name="password" type="password" defaultValue="password" />
						    		</div>
						    		<div className="checkbox">
						    	    	<label>
						    	    		<input name="remember" type="checkbox" value="Remember Me" /> Remember Me
						    	    	</label>
						    	    </div>
						    		<input className="btn btn-lg btn-success btn-block" id="loginBtn" type="submit" value={this.state.loading ? 'Please Wait..' : 'Login'} disabled={this.state.loading} onClick={this.login}/>
						    	</fieldset>
						      	</form>
						    </div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}