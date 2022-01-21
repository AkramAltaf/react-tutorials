import React, { useState } from "react";

function AddUser() {
  const [inputs, setInputs] = useState({});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    setInputs(() => ({}));
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Add users</h2>
      <label>
        Enter your name
        <input
          type="text"
          name="username"
          value={inputs.username || ""}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Enter your age
        <input
          type="text"
          name="age"
          value={inputs.age || ""}
          onChange={handleChange}
        />
      </label>
      <br />
      <input type="submit" />
    </form>
  );
}

export default AddUser;
