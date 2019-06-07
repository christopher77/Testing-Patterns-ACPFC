/** @jsx jsx */
import React, { useState } from "react";
import { jsx } from "@emotion/core";
import "./Employee.css";

function Employee({ employee, getChilds, addItem }) {
  const [child, setChild] = useState("");
  const childs = getChilds(employee.id);

  function handleChange(e) {
    setChild(e.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    addItem({
      id: new Date().toString(),
      name: child,
      title: "------",
      parentId: employee.id
    });
    setChild("");
  }

  return (
    <li
      css={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        position: "relative",
        textAlign: "center",
        listStyleType: "none",
        padding: "1em 0.5em 0 0.5em"
      }}
    >
      <div
        css={{
          border: "1px solid #ccc",
          padding: "0.5em 0.75em",
          textDecoration: "none",
          display: "inline-block",
          borderRadius: "5px",
          color: "#333",
          position: "relative",
          top: "1px"
        }}
      >
        {employee.name} - {employee.title}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="employee-name"
            aria-label="Employee name"
            placeholder="Employee name"
            onChange={handleChange}
            value={child}
          />
        </form>
      </div>
      {childs.length !== 0 && (
        <ul
          css={{
            display: "flex",
            justifyContent: "space-between",
            padding: "1em",
            position: "relative"
          }}
        >
          {childs.map(child => (
            <Employee
              employee={child}
              getChilds={getChilds}
              key={child.id}
              addItem={addItem}
            />
          ))}
        </ul>
      )}
    </li>
  );
}

export default Employee;
