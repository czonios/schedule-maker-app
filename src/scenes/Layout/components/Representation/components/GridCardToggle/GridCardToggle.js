import React from 'react';
import PropTypes from 'prop-types'
import { Checkbox } from 'semantic-ui-react'

const propTypes = {
  gridOrCardDisplay: PropTypes.string.isRequired,
  toggleGridOrCardDisplay: PropTypes.func.isRequired
};

const defaultProps = {};

const GridCardToggle = ({ gridOrCardDisplay, toggleGridOrCardDisplay }) => (
  <div>
    <p>Display</p>
    <span>Grid</span>
    <Checkbox onChange={toggleGridOrCardDisplay} checked={gridOrCardDisplay === 'card'} toggle />
    <span>Cards</span>
  </div>
)


GridCardToggle.propTypes = propTypes;

GridCardToggle.defaultProps = defaultProps;

export default GridCardToggle;
