import React from 'react';
import PropTypes from 'prop-types'
import { Icon } from 'semantic-ui-react';

const propTypes = {
  name: PropTypes.string.isRequired,
  onClickCb: PropTypes.func.isRequired,
};

const defaultProps = {
  cbArgs: null
};

const HoverableIcon = ({ show, name, onClickCb, cbArgs }) => {
  if (show === false) return null;
  return <Icon link name={name} onClick={handleClick(onClickCb, cbArgs)}  />
};


// Should handle callbacks like this rather than inline on the onClick (for perf), 
// but is there a simpler way to do it?
const handleClick = (onClickCb, cbArgs) => () => onClickCb(cbArgs);

HoverableIcon.propTypes = propTypes;

HoverableIcon.defaultProps = defaultProps;

export default HoverableIcon;