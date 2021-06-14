import React from "react";

const User = ({ user, doctors, user_full_name }) => {
  const { id, dob } = user;
  return (
    <>
      <h1>{user_full_name}</h1>
      <h3>{dob}</h3>
      <hr />
      <h6>Doctors</h6>
      <ul>
        { doctors.map((doctor) => (
          <li>
            <a href={`/doctors/${doctor.id}`}>{doctor.first_name}{doctor.last_name}</a>
          </li>
        ))}
      </ul>
      <a href={`/users/${id}/edit`}>
        User update
      </a>
      <br />
      <a href={`/users/${id}`} data-method="delete">
        User delete
      </a>
    </>
  );
}

export default User;