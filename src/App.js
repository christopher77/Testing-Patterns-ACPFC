import React from "react";
import Form from "./form";

function App() {
  const [nameCompany, setNameCompany] = React.useState("Able");

  return (
    <>
      <Form
        setNameCompany={setNameCompany}
        label="Enter the name of the Company"
        placeholder="Company name"
      />
      {/* <Form label="Enter the name of CEO " placeholder="CEO name" /> */}
      <h1>{nameCompany}</h1>
    </>
  );
}

export default App;
