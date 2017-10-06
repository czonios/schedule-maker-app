import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Layout from './scenes/Layout/Layout';


class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <div className="App">
          <Layout />
        </div>
      </Provider>
    );
  }
}

export default App;
