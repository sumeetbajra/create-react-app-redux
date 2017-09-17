import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { increment, decrement, incrementAsync } from '../../actions/counterActions';

import logo from '../logo.svg';

import Counter from './Counter';

class Homepage extends Component {

	render() {
		return (
			<div className="App">
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
				</div>
				<p className="App-intro">
					To get started, edit <code>src/modules/Home/Container/index.js</code> and save to reload.
				</p>
				<Counter
					count={this.props.count}
					incrementAsync={this.props.incrementAsync}
					increment={this.props.increment} decrement={this.props.decrement}
				/>
			</div>
		)
	}
}

const mapStateToProps = (store) => {
	return {
		count: store.counter.count
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		increment,
		decrement,
		incrementAsync,
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage)
