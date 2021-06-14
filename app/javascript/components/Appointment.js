import React from 'react';

const Appointment = ({ appt, user }) => {
  const { time, speciality } = appt
  return (
    <>
      <h1>{user.first_name} {user.last_name}</h1>
      <p>{speciality}</p>
      <p>{time}</p>
    </>
  )
}

export default Appointment;