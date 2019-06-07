import React from "react";

function Form({ label, placeholder, setNameCompany }) {
  function setName(event) {
    event.preventDefault();
    setNameCompany(event.target.elements.name.value);
  }
  return (
    <form onSubmit={setName}>
      <label>{label}</label>
      <input name="name" placeholder={placeholder} />
      <button type="submit">Next</button>
    </form>
  );
}

export default Form;
