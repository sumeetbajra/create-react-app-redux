import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import Header from '../Header';
import Footer from '../Footer';
import Homepage from '../Home';

class Dashboard extends Component {

  render() {
    return (
			<span>
				<Header />
        <Switch>
          <Route path="/home" component={Homepage} />
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
