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

  if (start) {
    return (
      <div css={styles.centerView}>
        <div css={{ margin: "16px", width: "100%" }}>
          <h1 css={styles.title}>Oh My Chart</h1>
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
        nameCompany={nameCompany}
      />
    );
  }

  if (employees.length === 0)
    return (
      <Form
        saveName={handleCreateChild}
        label="Enter the name of the CEO"
        placeholder="Company CEO"
        nameCompany={nameCompany}
      />
    );

  return <Chart employees={employees} handleCreateChild={handleCreateChild} />;
}

export default App;
