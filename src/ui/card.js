/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

function Card({ children, ...props }) {
  const style = {
    backgroundColor: "#fff",
    padding: "16px",
    borderRadius: "8px",
    color: "#000",
    boxShadow: "2px 4px 24px 0 rgba(0, 0, 0, 0.15)"
  };
  return <div css={style}>{children}</div>;
}

export default Card;
