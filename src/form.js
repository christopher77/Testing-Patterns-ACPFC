/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

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
    <div
      css={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <form
        onSubmit={setName}
        css={{
          margin: "auto",
          backgroundColor: "white",
          borderRadius: ".5rem",
          padding: "2rem 1rem",
          fontSize: "25px",
          width: "80%",
          maxWidth: 360,
          textAlign: "center"
        }}
      >
        <label
          css={{
            margin: 0,
            fontWeight: "500",
            textAlign: "center",
            justifyContent: "center"
          }}
        >
          {label}
        </label>
        <input
          css={{
            border: "none",
            padding: ".5rem 1rem",
            fontSize: "1.2rem",
            boxSizing: "border-box",
            width: "100%",
            outline: "none",
            transition: "border-bottom-color 300ms ease",
            ":focus": {
              borderBottomColor: "#7E00F3"
            }
          }}
          required="required"
          autoComplete="off"
          name="name"
          placeholder={placeholder}
          onChange={onChangeInputName}
          value={currentValue}
        />
        <button
          css={{
            backgroundColor: "blue",
            borderRadius: ".5rem",
            color: "white",
            width: "100%",
            padding: ".75rem .5rem",
            boxSizing: "border-box",
            fontSize: ".9rem",
            fontWeight: "500",
            textTransform: "uppercase",
            outline: "none"
          }}
          type="submit"
        >
          Next
        </button>
      </form>
    </div>
  );
}

export default Form;
