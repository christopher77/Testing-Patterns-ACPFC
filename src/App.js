/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import Form from "./form";
import Chart from "./chart";
import Button from "./ui/button";
import Card from "./ui/card";
import { centerView } from "./ui/styles";

const initialEmployees = JSON.parse(localStorage.getItem("employees") || "[]");

function App() {
  const [nameCompany, setNameCompany] = React.useState(
    localStorage.getItem("company")
  );
  const [start, setStart] = React.useState(
    localStorage.getItem("start") || false
  );
  const [employees, setEmployees] = React.useState(initialEmployees);

  React.useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  React.useEffect(() => {
    localStorage.setItem("start", start);
  }, [start]);

  function handleCompany(value) {
    localStorage.setItem("company", value);
    setNameCompany(value);
  }

  function handleCreateChild(value, title = "CEO", parentId = null) {
    const newEmployee = {
      id: new Date().toString(),
      name: value,
      title,
      image: "https://i.imgur.com/Go7SE1T.png",
      parentId: parentId
    };
    setEmployees(state => [...new Set(state.concat(newEmployee))]);
  }

  if (!start) {
    return (
      <div css={centerView}>
        <div>
          <h1>Oh My Chart</h1>
          <Card>
            <div>
              <p>
                Create a organization chart Fast and simple Desktop and mobile
                presentation
              </p>
              <Button onClick={() => setStart(false)}>Start</Button>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  if (!nameCompany) {
    return (
      <Form
        saveName={handleCompany}
        label="Enter the name of the Company"
        placeholder="Company name"
      />
    );
  }

  if (employees.length === 0)
    return (
      <Form
        saveName={handleCreateChild}
        label="Enter the name of the CEO"
        placeholder="Company CEO"
      />
    );

  return <Chart employees={employees} handleCreateChild={handleCreateChild} />;
}

export default App;
