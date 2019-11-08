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
    console.log(event);
    props.onSubmit(values, props.back);
  };

  return (
    <div className="newsmurfform">
      <form onSubmit={onSubmit}>
        <div>
          <label>Name</label>
          <input placeholder="name" name="name" onChange={onChange} />
        </div>
        <div>
          <label>Age</label>
          <input placeholder="age" name="age" onChange={onChange} />
        </div>
        <div>
          <label>Height</label>
          <input placeholder="height" name="height" onChange={onChange} />
        </div>
        <button type="submit">Add Smurf</button>
      </form>
    </div>
  );
}
