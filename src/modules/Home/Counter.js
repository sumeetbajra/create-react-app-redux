import React, { Component } from 'react';

export default class Counter extends Component {
	
	increment = () => {
		this.props.increment();
	}

	decrement = () => {
		this.props.decrement();
	}

	render() {
		return (
			<div>
				<h3>Count: {this.props.count}</h3>
				<button className="btn btn-success" onClick={this.increment}>Increase</button>&nbsp; 
				<button className="btn btn-danger" onClick={this.decrement}>Decrease</button>
			</div>
		)
	}
}