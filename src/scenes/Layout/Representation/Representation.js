import React from 'react';
import './representation.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from './data/actions';
import Month from './Month/Month';


const Representation = ({ displayMonth, displayYear, incrementDisplayMonth, decrementDisplayMonth }) => {
    return (
        <div className="representation">
            <Month displayMonth={displayMonth} displayYear={displayYear}
                incrementDisplayMonth={incrementDisplayMonth} decrementDisplayMonth={decrementDisplayMonth} />
        </div>
    );
}

function mapStateToProps(state, ownProps) {
    return {
        displayMonth: state.layout.representation.data.displayMonth,
        displayYear: state.layout.representation.data.displayYear
    }
}

function mapDispatchToProps(dispatch) {
    const { incrementDisplayMonth,
        decrementDisplayMonth } = actions;
    return bindActionCreators({
        incrementDisplayMonth,
        decrementDisplayMonth
    }, dispatch);
};

const propTypes = {
    displayMonth: PropTypes.number.isRequired,
    displayYear: PropTypes.number.isRequired,
    incrementDisplayMonth: PropTypes.func.isRequired,
    decrementDisplayMonth: PropTypes.func.isRequired
}
Representation.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(Representation);