/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import Form from "./form";
import Chart from "./chart";
import Button from "./ui/button";
import styles from "./ui/styles";

const initialEmployees = JSON.parse(localStorage.getItem("employees") || "[]");
const initialStart = JSON.parse(localStorage.getItem("start") || "true");

function App() {
  const [nameCompany, setNameCompany] = React.useState(
    localStorage.getItem("company")
  );
  const [start, setStart] = React.useState(initialStart);
  const [employees, setEmployees] = React.useState(initialEmployees);

  React.useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  React.useEffect(() => {
    localStorage.setItem("start", JSON.stringify(start));
  }, [start]);

  function handleCompany(value) {
    localStorage.setItem("company", value);
    setNameCompany(value);
  }

  function handleCreateChild(fields, parentId = null) {
    const newEmployee = {
      id: new Date().toISOString(),
      name: fields.name,
      title: fields.title,
      photo: fields.photo,
      parentId: parentId
    };
    setEmployees(state => [...new Set(state.concat(newEmployee))]);
  }

  function handleNewCeo(name) {
    handleCreateChild({
      name,
      title: "CEO",
      photo: "https://i.imgur.com/BXTixFL.png"
    });
  }

  if (start) {
    return (
      <div css={styles.centerView}>
        <div css={{ margin: "16px", width: "100%" }}>
          <h1
            css={{
              fontSize: "32px",
              fontWeight: "bold",
              marginBottom: "16px",
              textAlign: "center"
            }}
          >
            Oh My Chart
          </h1>
          <div css={styles.card}>
            <div
              css={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}
            >
              <h4>Create a organization chart</h4>
              <h4>Fast and simple</h4>
              <h4 css={{ marginBottom: "16px" }}>
                Desktop and mobile presentation
              </h4>
              <Button onClick={() => setStart(false)}>Start</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!nameCompany) {
    return (
      <Form
        saveName={handleCompany}
        label="Company name"
        placeholder="Add the name of your company"
      />
    );
  }

  if (employees.length === 0)
    return (
      <Form
        saveName={handleNewCeo}
        label="Enter the name of the CEO"
        placeholder="Company CEO"
      />
    );

  return <Chart employees={employees} handleCreateChild={handleCreateChild} />;
}

export default App;
