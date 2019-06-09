/** @jsx jsx */
import React, { useState } from "react";
import { jsx, Global } from "@emotion/core";
import NewEmployee from "./new-employee";

function Employee({ employee, getChildren, handleCreateChild }) {
  const children = getChildren(employee.id);

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
        <NewEmployee
          handleCreateChild={handleCreateChild}
          employee={employee}
        />
      </div>
      {children.length !== 0 && (
        <ul
          css={{
            display: "flex",
            justifyContent: "space-between",
            padding: "1em",
            position: "relative"
          }}
        >
          {children.map(child => (
            <Employee
              employee={child}
              getChildren={getChildren}
              key={child.id}
              handleCreateChild={handleCreateChild}
            />
          ))}
        </ul>
      )}
    </li>
  );
}

export default Employee;
