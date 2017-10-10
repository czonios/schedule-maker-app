import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox, Header } from 'semantic-ui-react';
import './gridCardToggle.css';

const propTypes = {
  gridOrCardDisplay: PropTypes.string.isRequired,
  toggleGridOrCardDisplay: PropTypes.func.isRequired
};

const defaultProps = {};

const GridCardToggle = ({ gridOrCardDisplay, toggleGridOrCardDisplay }) => (
  <div>
    <Header size="small" className="view-option">Grid</Header>
    <Checkbox className="toggle-view" onChange={toggleGridOrCardDisplay} checked={gridOrCardDisplay === 'card'} toggle />
    <Header size="small" className="view-option">Cards</Header>
  </div>
)


GridCardToggle.propTypes = propTypes;

GridCardToggle.defaultProps = defaultProps;

export default GridCardToggle;
