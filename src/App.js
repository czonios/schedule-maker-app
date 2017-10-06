import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Layout from './scenes/Layout/Layout';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <BrowserRouter>
          <div className="App">
            <Switch>
              <Route path="/:view?/:year?/:month?/:week?/:day?" component={Layout} />
            </ Switch>
          </div>
        </ BrowserRouter>
      </Provider>
    );
  }
}

export default App;
