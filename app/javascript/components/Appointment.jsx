import React from 'react'
import moment from 'moment'

const Appointment = (props) => (
  <div className="appointment">
    <h3>{props.appointment.title}</h3>
    <p>{moment(props.appointment.appointment_time).format('MMMM DD YYYY, h:mm:ss a')}</p>
  </div>
)

export default Appointment;
