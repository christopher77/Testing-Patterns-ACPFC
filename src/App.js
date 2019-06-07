import React from "react";
import Form from "./form";
import Chart from "./chart";

const initialEmployees = JSON.parse(localStorage.getItem("employees") || "[]");

function App() {
  const [nameCompany, setNameCompany] = React.useState(
    localStorage.getItem("company")
  );
  const [employees, setEmployees] = React.useState(initialEmployees);

  React.useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  function handleCompany(value) {
    localStorage.setItem("company", value);
    setNameCompany(value);
  }

  function handleCreateChild(value, title = "CEO", parentId = null) {
    const newEmployee = {
      id: new Date().toString(),
      name: value,
      title,
      parentId: parentId
    };
    setEmployees(state => [...new Set(state.concat(newEmployee))]);
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
