import React, {Component} from 'react'
import DateTime from 'react-datetime'

class AppointmentForm extends Component {
  handleChange = (e) => {
    let name = e.target.name;
    let obj = {};
    obj[name] = e.target.value;
    this.props.onUserInput(obj)
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onFormSubmit()
  }

  setApptTime = (e) => {
    let name = 'appointment_time';
    let obj = {};
    if (obj[name] = e.toDate()){
      this.props.onUserInput(obj)
    }
  }

  render(){
    let inputProps = {
      name: 'appointment_time'
    }
    return(
     <div>
       <h2>Make a new appointment</h2>
       <form onSubmit={this.handleSubmit}>
         <input name='title' placeholder='Appointment Title' value={this.props.title} onChange={this.handleChange}/>
         <DateTime inputProps={inputProps} value={this.props.appointment_time} open={true} input={false} onChange={this.setApptTime}/>
         <input type='submit' value="Make Appointment" className="submit-button"/>
       </form>
     </div>
    );
  }
}

export default AppointmentForm;
