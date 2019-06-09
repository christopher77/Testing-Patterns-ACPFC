/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

function InputText({ ...props }) {
  return (
    <input
      {...props}
      css={{
        width: "100%",
        fontSize: 18,
        border: "1px solid #cecece",
        height: "40px",
        borderRadius: "4px",
        border: "solid 1px #cecece",
        fontFamily: "inherit",
        padding: "0 16px",
        boxSizing: "border-box",
        ":focus": {
          outline: "none"
        }
      }}
    />
  );
}

export default InputText;
