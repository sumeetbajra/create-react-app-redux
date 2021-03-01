import React from 'react';
import PropTypes from 'proptypes';

const Counter = ({
  count, incrementAsync, increment, decrement
}) => (
  <div>
    <h3>
      Count:&nbsp;
      {count}
    </h3>
    <button
      type="button"
      className="btn btn-success"
      onClick={incrementAsync}
    >
      Increase (Async)
    </button>
    &nbsp;
    <button
      type="button"
      className="btn btn-success"
      onClick={increment}
    >
      Increase
    </button>
    &nbsp;
    <button
      type="button"
      className="btn btn-danger"
      onClick={decrement}
    >
      Decrease
    </button>
  </div>
);

Counter.propTypes = {
  count           : PropTypes.number.isRequired,
  incrementAsync  : PropTypes.func.isRequired,
  increment       : PropTypes.func.isRequired,
  decrement       : PropTypes.func.isRequired
};

export default Counter;
