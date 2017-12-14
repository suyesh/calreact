import React from "react"
import PropTypes from "prop-types"
import axios from 'axios'
import AppointmentsList from './AppointmentsList'
import AppointmentForm from './AppointmentForm'

class Appointments extends React.Component {
  state = {
   appointments: this.props.appointments,
   title: 'Set a Title',
   appointment_time: 'Appointment Date'
  }

  handleUserInput = (obj) => {
   this.setState(obj)
  }

  handleFormSubmit = () => {
    let appointment = {title: this.state.title, appointment_time: this.state.appointment_time}
    axios.post('/appointments', {appointment: appointment})
    .then((appointment) => this.addNewAppointment(appointment))
  }

  addNewAppointment = (appointment) => {
    this.setState({
      appointments: [appointment.data,...this.state.appointments],
      title: 'Set a Title',
      appointment_time: 'Appointment Date'
    });
  }

  sortAppointments = (appointments) => {
    return appointments.sort((a,b) => new Date(a.appointment_time) - new Date(b.appointment_time))
  }


  render () {
    return(
      <div>
        <AppointmentForm
          title={this.state.title}
          appointment_time={this.state.appointment_time}
          onUserInput={this.handleUserInput}
          onFormSubmit={this.handleFormSubmit}
        />

        <AppointmentsList
          appointments={this.sortAppointments(this.state.appointments)}
        />
      </div>
    )
  }
}

export default Appointments
