import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
// import './dayOfWeek.css';
// import EditEvent from '../../../../services/EditEvent';

let showModal = false;

class DayOfWeek extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    }
  }
  render() {
    return (
      <div className="clickable" onClick={this.setModal}>
        <Header size="tiny">title for {this.props.time}</Header>
        <p>description</p>
        {this.showModal ?
          <div />
          : null}
      </div>
    )
  }
  setModal = (event) => {
    this.setState({
      showModal: true
    })
  }
}



export default DayOfWeek;