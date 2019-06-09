import React from "react";
import ReactDOM from "react-dom";
import { Global } from "@emotion/core";
import App from "./App";
import arrowsSyles from "./global";

const globalStyles = {
  body: {
    margin: 0,
    backgroundColor: "#223fce",
    color: "#fff",
    fontSize: "18px",
    fontFamily:
      "'Jaldi', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
  },
  "h1, h2, h3, h4, h5, h6": {
    fontWeight: "400",
    fontSize: "inherit",
    margin: "0"
  }
};

function Root() {
  return (
    <>
      <Global styles={globalStyles} />
      <Global styles={arrowsSyles} />
      <App />
    </>
  );
}

ReactDOM.render(<Root />, document.getElementById("root"));
