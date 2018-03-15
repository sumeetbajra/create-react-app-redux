import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Dashboard from '../modules/Dashboard';
// import Dashboard from '../modules/Dashboard';

export class App extends Component {

	render() {
		return (
			<span>
				<Switch>
          <Route component={Dashboard} />
        </Switch>
			</span>
		)
	}
}
