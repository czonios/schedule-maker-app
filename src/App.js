import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Layout from './scenes/Layout/Layout';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import dateService from './services/dates/dateService';

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <BrowserRouter>
          <div className="App">
            <Switch>
              <Route path="/" exact render={() => (
                <Redirect to={`/month${urlPathForToday()}`} />
              )} />
              <Route path="/:view?/:year?/:month?/:day?" component={Layout} />
            </ Switch>
          </div>
        </ BrowserRouter>
      </Provider>
    );
  }
}

function urlPathForToday() {
  const year = dateService.today.getFullYear();
  const month = dateService.today.getMonth();
  return `/${year}/${month}`
}

export default App;
