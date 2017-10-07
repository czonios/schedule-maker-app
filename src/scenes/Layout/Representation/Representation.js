import React from 'react';
import './representation.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from './data/actions';
import Month from './Month/Month';
import Week from './Week/Week';
import Day from './Day/Day';
import { Menu } from 'semantic-ui-react';


const Representation = (props) => {

    // state = { activeItem: 'bio' }
    
    // handleItemClick = (e, { name }) => this.setState({ 
    //     activeItem: name 
    // });

    // const { activeItem } = this.state

    return (
        <div className="representation">
            {/* <Menu tabular>
                <Menu.Item name='bio' active={activeItem === 'bio'} onClick={this.handleItemClick} />
                <Menu.Item name='photos' active={activeItem === 'photos'} onClick={this.handleItemClick} />
            </Menu> */}
            {chooseView(props)}
        </div>
    );
}
function chooseView({ displayMonth, displayYear, incrementDisplayMonth, decrementDisplayMonth, url }) {
    //Decide which view to render, based on the URL
    const view = url.match.params.view;
    //don't need the null check for route '/' i think?
    // if (!url.match) return null;
    if (view === 'month') {
        return <Month displayMonth={displayMonth} displayYear={displayYear}
            incrementDisplayMonth={incrementDisplayMonth} decrementDisplayMonth={decrementDisplayMonth} />
    } else if (view === 'week') {
        return <Week />
    } else if (view === 'day') {
        return <Day />
    }
}

function mapStateToProps(state, ownProps) {
    const { params } = ownProps.url.match;
    return {
        events: state.layout.representation.data.events,
        displayMonth: parseInt(params.month, 10),
        displayYear: parseInt(params.year, 10)
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