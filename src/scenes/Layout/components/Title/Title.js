import React from 'react';
import { Header } from 'semantic-ui-react';
import './title.css';

export const Title = (props) => {
    return (
        <div className="header">
            <Header size="huge" color="teal">Schedule Maker</Header>
            <Header sub color="grey">A web application for anyone looking to organize their life</Header>
            <hr />
            <br />
        </div>

    );
}