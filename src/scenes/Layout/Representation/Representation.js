import React from 'react';
import './representation.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from './data/actions';
import Month from './Month/Month';
import Week from './Week/Week';
import Day from './Day/Day';


const Representation = (props) => {
    return (
        <div className="representation">
            {chooseView(props)}
        </div>
    );
}
function chooseView({ displayMonth, displayYear, incrementDisplayMonth, decrementDisplayMonth, url }) {
    //Decide which view to render, based on the URL
    //Renders the month view by default (when the url is '/')
    if (!url.params
        || url.params.view === 'month') {
        return <Month displayMonth={displayMonth} displayYear={displayYear}
            incrementDisplayMonth={incrementDisplayMonth} decrementDisplayMonth={decrementDisplayMonth} />
    } else if (url.params.view === 'week') {
        return <Week />
    } else if (url.params.view === 'day') {
        return <Day />
    }
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
    decrementDisplayMonth: PropTypes.func.isRequired,
    url: PropTypes.object.isRequired
}
Representation.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(Representation);