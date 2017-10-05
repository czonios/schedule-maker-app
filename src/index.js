import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './scenes/Layout/Layout';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(<Layout />, document.getElementById('root'));
registerServiceWorker();
