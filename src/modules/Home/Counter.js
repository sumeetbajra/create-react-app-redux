import React, { Component, PropTypes } from 'react';

export default class Counter extends Component {
	render() {
		return (
			<div>
				<h3>Count: {this.props.count}</h3>
				<button
					className="btn btn-success"
					onClick={this.props.incrementAsync}
				>
					Increase (Async)
				</button>&nbsp; 
				<button
					className="btn btn-success"
					onClick={this.props.increment}
				>
					Increase
				</button>&nbsp; 
				<button
					className="btn btn-danger"
					onClick={this.props.decrement}
				>
					Decrease
				</button>
			</div>
		)
	}
}

Counter.propTypes = {
	incrementAsync	: PropTypes.func.isRequired,
	increment				: PropTypes.func.isRequired,
	decrement				: PropTypes.func.isRequired
}