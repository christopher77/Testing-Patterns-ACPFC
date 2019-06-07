import React from "react";
import Form from "./form";

function App() {
  const [nameCompany, setNameCompany] = React.useState(null);
  const [nameCEO, setNameCEO] = React.useState(null);

  function saveName(name) {
    if (!nameCompany) {
      setNameCompany(name);
    } else {
      setNameCEO(name);
    }
  }

  if (!nameCompany) {
    return (
      <Form
        saveName={saveName}
        label="Enter the name of the Company"
        placeholder="Company name"
      />
    );
  }
  if (!nameCEO) {
    return (
      <Form
        saveName={saveName}
        label="Enter the name of the CEO"
        placeholder="Company CEO"
      />
    );
  }
  return (
    <>
      <h1>chart =)</h1>
    </>
  );
}

export default App;
