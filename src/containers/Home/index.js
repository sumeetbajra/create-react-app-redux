import React from 'react';
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

const Homepage = ({ count, actions }) => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
    </div>
    <p className="App-intro">
      To get started, edit&nbsp;
      <code>src/containers/Home/index.js</code>
      &nbsp;
      and save to reload.
    </p>
    <Counter
      count={count}
      incrementAsync={actions.incrementAsync}
      increment={actions.increment}
      decrement={actions.decrement}
    />
  </div>
);

const mapStateToProps = (store) => ({
  count: store.counter.count
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    increment,
    incrementAsync,
    decrement
  }, dispatch)
});

Homepage.propTypes = {
  count						: PropTypes.number.isRequired,
  actions         : PropTypes.shape({
    incrementAsync: PropTypes.func.isRequired,
    increment     : PropTypes.func.isRequired,
    decrement     : PropTypes.func.isRequired
  }).isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
