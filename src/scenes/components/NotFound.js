import React from 'react';
import { Message } from 'semantic-ui-react';

const NotFound = props => (
  <div>
    <Message negative>
      <Message.Header>404</Message.Header>
      <p>Sorry, that page could not be found</p>
    </Message>
  </div>
);

export default NotFound;
