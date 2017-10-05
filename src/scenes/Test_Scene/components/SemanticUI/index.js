import React from 'react';
import { Message } from 'semantic-ui-react';

const SemanticUIComponent = props => (
  <Message info>
    <Message.Header>Semantic UI</Message.Header>
    <p>If you can see this message, that means semantic-ui and
       semantic-ui-react are installed and working</p>
  </Message>
);

export default SemanticUIComponent;
