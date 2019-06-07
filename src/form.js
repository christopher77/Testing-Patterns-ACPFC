import React from "react";

function Form({ label, placeholder, saveName }) {
  const [currentValue, setCurrentValue] = React.useState("");

  function setName(event) {
    event.preventDefault();
    saveName(currentValue);
    setCurrentValue("");
  }

  function onChangeInputName(event) {
    setCurrentValue(event.currentTarget.value);
  }

  return (
    <form onSubmit={setName}>
      <label>{label}</label>
      <input
        required="required"
        autoComplete="off"
        name="name"
        placeholder={placeholder}
        onChange={onChangeInputName}
        value={currentValue}
      />
      <button type="submit">Next</button>
    </form>
  );
}

export default Form;
