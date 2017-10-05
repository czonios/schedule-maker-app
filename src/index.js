import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './scenes/Layout/Layout';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Layout />, document.getElementById('root'));
registerServiceWorker();
