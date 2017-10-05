import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter } from '../../data/test_store_slice/actions.js';

const ReduxComponent = ({ counter, incrementCounter, decrementCounter }) => (
  <div>
    If you can increment and decrement the counter, then the redux store is working properly.
    {/* <div style={{ fontSize: '3em' }}> */}
    <div>
      <button onClick={decrementCounter}>-</button>
      <span style={{ fontSize: '2em' }}>{counter}</span>
      <button onClick={incrementCounter} >+</button>
    </div>
    {/* </div> */}
  </div>
);

function mapStateToProps(state, ownProps) {
  return {
    counter: state.test_scene.data.test_store_slice.count
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    incrementCounter,
    decrementCounter
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ReduxComponent);
