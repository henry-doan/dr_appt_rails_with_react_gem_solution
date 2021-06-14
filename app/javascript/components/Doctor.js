import React from "react";

const Doctor = ({ doctor, users, doctor_name }) => {
  const { id } = doctor;
  return (
    <>
      <h1>{doctor_name}</h1>
      <hr />
      <h6>Users</h6>
      <ul>
        { users.map((user) => (
          <li>
            <a href={`/users/${user.id}`}>{user.first_name}{user.last_name}</a>
          </li>
        ))}
      </ul>
      <a href={`/doctors/${id}/appointments`}>
        Doctor Appointments
      </a>
      <br />
      <a href={`/doctors/${id}/edit`}>
        Doctor update
      </a>
      <br />
      <a href={`/doctors/${id}`} data-method="delete">
        Doctor delete
      </a>
    </>
  );
}

export default Doctor;