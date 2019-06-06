import React from "react";
import { render } from "react-dom";

function Form({ label, placeholder }) {
  return (
    <form>
      <label>{label}</label>
      <input placeholder={placeholder} />
      <button type="submit">Next</button>
    </form>
  );
}

export default Form;
