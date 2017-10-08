import React from 'react';
import { Header } from 'semantic-ui-react';
import './dayOfWeek.css';
import EditEvent from '../../../../services/EditEvent';

class DayOfWeek extends React.Component {
    constructor() {
        super();
        this.state = {
            showModal: false
        };
        this.setModal = this.setModal.bind(this);
    }

    setModal(event) {
        if (this.state.showModal) {
            this.setState({
                showModal: false
            });
        }
        else {
            this.setState({
                showModal: true
            });
        }
    }

    render() {
        return (
            <div className="clickable" onClick={this.setModal.bind(this)}>
                <Header size="tiny">title for {this.props.time}</Header>
                <p>description</p>
                <EditEvent show={this.state.showModal} />
            </div>
        )
    }
}

export default DayOfWeek;