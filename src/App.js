import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import SemanticUIComponent from './scenes/Test_Scene/components/SemanticUI/index.js';
import ReduxComponent from './scenes/Test_Scene/components/Redux/index.js';


class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <div className="App">
          <SemanticUIComponent />
          <ReduxComponent />
        </div>
      </Provider>
    );
  }
}

export default App;
