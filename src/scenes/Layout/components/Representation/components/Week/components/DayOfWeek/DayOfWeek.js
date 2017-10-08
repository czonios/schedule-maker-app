import React from 'react';
import { Header } from 'semantic-ui-react';
//import dateService from '../../../../../../services/dates/dateService';

const DayOfWeek = (props) => (
    <div>
        <Header size="tiny">title for {props.time}</Header>
        <p></p>
    </div>
);

export default DayOfWeek;
