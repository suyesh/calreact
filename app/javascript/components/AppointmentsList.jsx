import React from 'react'
import Appointment from './Appointment'

const AppointmentList = (props) => (
    props.appointments.map((appointment) => (
      <Appointment appointment={appointment} key={appointment.id}/>
    ))
)

export default AppointmentList;
