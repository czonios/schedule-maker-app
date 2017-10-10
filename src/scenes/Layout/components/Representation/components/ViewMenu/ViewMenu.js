import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import GridCardToggle from '.././GridCardToggle/GridCardToggle';


export const ViewMenu = ({ day, month, year, view, gridOrCardDisplay, toggleGridOrCardDisplay }) => {

    return (
        <Menu tabular>
            <Menu.Item as={Link} to={`/month/${year}/${month}/${day}`} name='month' active={view === 'month'}>
                Month
            </Menu.Item>

            <Menu.Item as={Link} to={`/week/${year}/${month}/${day}`} name='week' active={view === 'week'}>
                Week
            </Menu.Item>

            <Menu.Item as={Link} to={`/day/${year}/${month}/${day}`} name='day' active={view === 'day'}>
                Day
            </Menu.Item>

            <Menu.Item position="right">
                <GridCardToggle gridOrCardDisplay={gridOrCardDisplay} toggleGridOrCardDisplay={toggleGridOrCardDisplay} />
            </Menu.Item>
        </Menu>
    );

}

export default ViewMenu;