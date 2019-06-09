/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

function Button({ children, ...props }) {
  const styleButton = {
    borderRadius: "4px",
    backgroundColor: "rgba(17, 107, 242, 0.16)",
    textTransform: "uppercase",
    color: "#223fce",
    padding: "16px 32px",
    border: "none"
  };
  return (
    <button css={styleButton} {...props}>
      {children}
    </button>
  );
}

export default Button;
