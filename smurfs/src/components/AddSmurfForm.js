import React, { useState } from "react";

export default function AddsmurfForm(props) {
  const [values, setValues] = useState({
    name: "",
    age: "",
    height: ""
  });
  const onChange = event => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const onSubmit = event => {
    event.preventDefault();
    props.onSubmit(values);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>Name</label>
        <input placeholder="name" name="name" onChange={onChange} />

        <label>Age</label>
        <input placeholder="age" name="age" onChange={onChange} />

        <label>Height</label>
        <input placeholder="height" name="height" onChange={onChange} />
        <button type="submit">Add Smurf</button>
      </form>
    </div>
  );
}
