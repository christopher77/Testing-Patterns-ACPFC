/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import styles from "./ui/styles";
import Button from "./ui/button";
import InputText from "./ui/input-text";

function Form({ label, placeholder, saveName, nameCompany }) {
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
      <div css={{ width: "100%" }}>
        {/* <h1 css={{ ...styles.title, fontWeight: 400 }}>{currentValue}</h1> */}
        <form
          onSubmit={setName}
          css={{
            ...styles.card,
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
    </div>
  );
}

export default Form;
