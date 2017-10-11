import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const ReduxComponent = ({ counter }) => (
  <div>
    {/* <div style={{ fontSize: '3em' }}> */}
    <div>
      <span style={{ fontSize: '2em' }}>{counter}</span>
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
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ReduxComponent);
