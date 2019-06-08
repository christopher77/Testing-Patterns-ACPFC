import React from "react";
import ReactDOM from "react-dom";
import { Global } from "@emotion/core";
import App from "./App";

function Root() {
  return (
    <>
      <Global
        styles={{
          body: {
            margin: 0,
            fontFamily:
              "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
          }
        }}
      />
      <App />
    </>
  );
}

ReactDOM.render(<Root />, document.getElementById("root"));
