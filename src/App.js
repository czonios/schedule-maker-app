import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Layout from './scenes/Layout/Layout';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import dateService from './services/dates/dateService';
import NotFound from './scenes/components/NotFound';
import EventModal from './scenes/components/GlobalModals/event/EventModal';

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <BrowserRouter>
          <div className="App">
            <EventModal />
            <Switch>
              <Route path="/" exact render={() => (
                <Redirect to={`/month${urlPathForToday()}`} />
              )} />
              <Route path="/:view/:year/:month/:day" component={Layout} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export function urlPathForToday() {
  const year = dateService.today.getFullYear();
  const month = dateService.today.getMonth() + 1;
  const day = dateService.today.getDate();
  return `/${year}/${month}/${day}`
}

export default App;
