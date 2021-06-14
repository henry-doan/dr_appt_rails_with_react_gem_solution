import React from "react";

const DoctorEdit = ({ doctor }) => {
  const { first_name, last_name, errors, id } = doctor;
  const defaultFirstName = first_name ? first_name : "";
  const defaultLastName = last_name ? last_name : "";
  return (
  <>
    <h1>Update Doctor</h1>
    { errors && errors }
    <form action={ "/doctors/" + id } method="post">
      <input type="hidden" name="_method" value="patch" />
      <input
        placeholder="First Name"
        type="text"
        defaultValue={defaultFirstName}
        name="doctor[first_name]"
      />
      <input
        placeholder="Last Name"
        type="text"
        defaultValue={defaultLastName}
        name="doctor[last_name]"
      />
      <button type="submit">Update</button>
    </form>
    </>
  );
}

export default DoctorEdit;