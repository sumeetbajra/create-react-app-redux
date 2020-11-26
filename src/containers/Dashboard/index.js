import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Header from '../Header';
import Footer from '../Footer';
import Homepage from '../Home';
import Login from '../Login';
import Register from '../Register';
import Posts from '../Posts';

class Dashboard extends Component {
  render() {
    return (
			<span>
				<Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/home" component={Homepage} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/posts" component={Posts} />
        </Switch>
				<Footer />
			</span>
		);
  }
}

const mapStateToProps = (store) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
