/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { centerView } from "./ui/styles";

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
    <div css={centerView}>
      <form
        onSubmit={setName}
        css={{
          margin: "auto",
          backgroundColor: "white",
          boxShadow: "0 2px 20px 0 rgba(0, 0, 0, 0.09)",
          borderRadius: ".5rem",
          padding: "2rem 1rem",
          fontSize: "25px",
          width: "80%",
          maxWidth: 380,
          textAlign: "center"
        }}
      >
        <label
          htmlFor="name"
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
            borderBottom: "1px solid #ddd",
            padding: ".5rem 1rem",
            fontSize: "1.2rem",
            boxSizing: "border-box",
            width: "100%",
            outline: "none",
            transition: "border-bottom-color 300ms ease",
            textAlign: "center",
            margin: "1em 0",
            ":focus": {
              borderBottomColor: "#7E00F3"
            }
          }}
          id="name"
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
            border: "none",
            color: "white",
            width: "100%",
            padding: ".75rem .5rem",
            marginTop: ".5em",
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
