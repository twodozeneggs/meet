import React, { Component } from 'react';
import { ErrorAlert } from './Alert';


class NumberOfEvents extends Component {
  state = {
    errorText: ''
  };

  handleInputChanged = event => {
    let value = event.target.value;
    if (value === '') { value = undefined };
    // If value is negative or greater 32, display an error, else update list of events
    if (value < 0 || value > 32) {
      this.setState({
        errorText: 'Select a number from 1 to 32'
      });
    } else {
      this.setState({
        eventNumber: value, 
        errorText: ''
      });
    }
    this.props.updateNumberofEvents(undefined, value);
  }

  render() {
    return (

      <div className='numberOfEvents'>
        <label>Number of events to show:</label>
        <input
          type='number'
          className='number'
          placeholder='Number'
          onChange={this.handleInputChanged}
        />
        <ErrorAlert id='errorAlert' text={this.state.errorText} />
      </div>





    )
  }
}
//   render() {
//     return (
//       <div className="NumberOfEvents">
//         <input 
//           className="number-of-events"
//           type="number"
//           value={this.props.numberOfEvents}>
//         </input>
//       </div>
//     );
//   }
// }

export default NumberOfEvents;