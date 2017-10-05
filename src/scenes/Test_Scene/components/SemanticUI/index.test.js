import React from 'react';
import ReactDOM from 'react-dom';
import SemanticUIComponent from './index';
it('SemanticUIComponent renders without crashing!', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SemanticUIComponent />, div);
});