import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Header from '../Header';
import Footer from '../Footer';
import Homepage from '../Home';
import Posts from '../Posts';
import FormExample from '../FormExample';

class Dashboard extends Component {
  render() {
    return (
			<span>
				<Header />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/home" component={Homepage} />
            <Route path="/posts" component={Posts} />
            <Route path="/form" component={FormExample} />
          </Switch>
        </div>
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
