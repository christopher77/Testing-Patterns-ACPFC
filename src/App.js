import React from "react";
import Form from "./form";

function App() {
  const [nameCompany, setNameCompany] = React.useState(null);
  const [nameCEO, setNameCEO] = React.useState(null);

  if (!nameCompany) {
    return (
      <Form
        saveName={setNameCompany}
        label="Enter the name of the Company"
        placeholder="Company name"
      />
    );
  }

  if (!nameCEO)
    return (
      <Form
        saveName={setNameCEO}
        label="Enter the name of the CEO"
        placeholder="Company CEO"
      />
    );

  return (
    <>
      <h1>chart =)</h1>
      <ul>
        <li>Name Company: {nameCompany}</li>
        <li>Name CEO: {nameCEO}</li>
      </ul>
    </>
  );
}

export default App;
