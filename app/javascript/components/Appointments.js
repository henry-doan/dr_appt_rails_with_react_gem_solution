import React from 'react';

const Appointments = ({ doctor, users, stranges, peds, fams }) => {
  const displayUser = (id) => {
    let fullName
    users.map((u) => {
      if (u.id === id) {
        fullName = u.first_name + " " + u.last_name 
      }
    })
    return fullName
  }

  return (
    <>
      <h1>{doctor.first_name} {doctor.last_name}</h1>
      <a href={`/doctors/${doctor.id}/appointments/new`}>Add Appointment</a>
      <br />
      <h2>Stranges</h2> 
      { stranges.map((s) => (
        <div>
          <p>{displayUser(s.user_id)}</p>
          <a href={`/doctors/${doctor.id}/appointments/${s.id}`}>
            show
          </a>
          {' '}
          <a href={`/doctors/${doctor.id}/appointments/${s.id}/edit`}>
            edit
          </a>
          {' '}
          <a href={`/doctors/${doctor.id}/appointments/${s.id}`} data-method="delete">
            delete
          </a>
        </div>
      ))}
      <h2>Pediatrics</h2> 
      { peds.map((p) => (
        <div>
          <p>{displayUser(p.user_id)}</p>
          <a href={`/doctors/${doctor.id}/appointments/${p.id}`}>
            show
          </a>
          {' '}
          <a href={`/doctors/${doctor.id}/appointments/${p.id}/edit`}>
            edit
          </a>
          {' '}
          <a href={`/doctors/${doctor.id}/appointments/${p.id}`} data-method="delete">
            delete
          </a>
        </div>
      ))}
      <h2>Family Medicine</h2> 
      { fams.map((f) => (
        <div>
          <p>{displayUser(f.user_id)}</p>
          <a href={`/doctors/${doctor.id}/appointments/${f.id}`}>
            show
          </a>
          {' '}
          <a href={`/doctors/${doctor.id}/appointments/${f.id}/edit`}>
            edit
          </a>
          {' '}
          <a href={`/doctors/${doctor.id}/appointments/${f.id}`} data-method="delete">
            delete
          </a>
        </div>
      ))}
    </>
  )
}

export default Appointments;