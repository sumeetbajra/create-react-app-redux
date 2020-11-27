import React, { Component } from 'react';
import PropTypes from 'proptypes';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
	increment,
	incrementAsync,
	decrement
} from '../../reducers/counterReducer';
import logo from '../logo.svg';

import Counter from './Counter';

class Homepage extends Component {
	render() {
		return (
			<div className="App">
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h2>Welcome to React</h2>
				</div>
				<p className="App-intro">
					To get started, edit <code>src/containers/Home/index.js</code> and save to reload.
				</p>
				<Counter
					count={this.props.count}
					incrementAsync={this.props.incrementAsync}
					increment={this.props.increment}
					decrement={this.props.decrement}
				/>
			</div>
		)
	}
}

const mapStateToProps = (store) => {
	return {
		count: store.counter.count
	};
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		increment,
		incrementAsync,
		decrement
	}, dispatch);
}

Homepage.propTypes = {
	count						: PropTypes.number.isRequired,
	increment				: PropTypes.func.isRequired,
	incrementAsync	: PropTypes.func.isRequired,
	decrement				: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
