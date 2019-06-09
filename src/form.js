/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import styles from "./ui/styles";
import Button from "./ui/button";
import InputText from "./ui/input-text";

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
    <div css={styles.centerView}>
      <form
        onSubmit={setName}
        css={{
          ...styles.card,
          ...styles.secureArea,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start"
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
        <InputText
          id="name"
          required="required"
          autoComplete="off"
          name="name"
          placeholder={placeholder}
          onChange={onChangeInputName}
          value={currentValue}
        />
        <Button css={{ marginTop: 24, alignSelf: "flex-end" }} type="submit">
          Next
        </Button>
      </form>
    </div>
  );
}

export default Form;
