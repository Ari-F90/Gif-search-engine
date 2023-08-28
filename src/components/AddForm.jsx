import { useState } from "react";
import PropTypes from "prop-types";

export const AddForm = ({ onNewField }) => {
  const [value, setValue] = useState("");

  const handleChange = (ev) => {
    setValue(ev.target.value);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (value.length === 0) return;
    setValue("");
    onNewField(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={value}
        type="text"
        placeholder="Search for a GIF"
        onChange={handleChange}
      ></input>
    </form>
  );
};

AddForm.propTypes = {
  onNewField: PropTypes.func,
};
