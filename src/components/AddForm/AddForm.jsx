import { useState } from "react";
import PropTypes from "prop-types";
import "./AddForm.css";

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
      <div className="input-container">
        <input
          className="input"
          value={value}
          type="text"
          placeholder="Search for a GIF"
          onChange={handleChange}
        ></input>
      </div>
    </form>
  );
};

AddForm.propTypes = {
  onNewField: PropTypes.func,
};
