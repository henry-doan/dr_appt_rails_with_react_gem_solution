import React from "react";

const AppointmentEdit = ({ doctor, appt, users }) => {
  const { speciality, errors, user_id, id, time } = appt;
  const defaultSpeciality = speciality ? speciality : "";
  const defaultTime = time ? time : "";
  const defaultUser = user_id ? user_id : "";
  return (
    <>
      <h1>Update Enrollment</h1>
      { errors && errors }
      <form action={`/doctors/${doctor.id}/appointments/${id}`} method="post">
        <input type="hidden" name="_method" value="patch" />
        <label for="speciality">Choose a speciality:</label>
        <select name="enrollment[speciality]" id="role" defaultValue={defaultSpeciality}>
          <option value="strange">strange</option>
          <option value="pediatrics">pediatrics</option>
          <option value="family medicine">family medicine</option>
        </select>
        <input
          placeholder="Time"
          type="text"
          defaultValue={defaultTime}
          name="user[time]"
        />
        <label for="user_id">Choose a user:</label>
        <select name="appointment[user_id]" id="user_id" defaultValue={defaultUser}>
          { users.map((u) => (
            <option value={u.id}>{`${u.first_name} ${u.last_name}`}</option>
          ))}
        </select>
      <button type="submit">Update</button>
    </form>
  </>
  );
}

export default AppointmentEdit;