import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import Header from '../Header';
import Footer from '../Footer';
import Homepage from '../Home';
import LoginPage from '../Login';
import RegisterPage from '../Register';

class Dashboard extends Component {

  render() {
    return (
			<span>
				<Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/home" component={Homepage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
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
