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
            backgroundColor: "#223fce",
            color: "#fff",
            fontFamily:
              "'Jaldi', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
          },
          "h1, h2, h3, h4, h5, h6": {
            fontWeight: "400"
          }
        }}
      />
      <App />
    </>
  );
}

ReactDOM.render(<Root />, document.getElementById("root"));
