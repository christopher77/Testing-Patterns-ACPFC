/** @jsx jsx */
import React, { useState } from "react";
import { jsx, Global } from "@emotion/core";
import Employee from "./employee";

function Chart({ employees, handleCreateChild }) {
  function getChildren(id) {
    return employees.filter(employee => employee.parentId === id);
  }

  return (
    <div className="tree">
      <ul
        css={{
          position: "relative",
          padding: "1em 0",
          whiteSpace: "nowrap",
          margin: "0 auto",
          textAlign: "center"
        }}
      >
        {/* employees.map para recorrer el array de employeee y generar un componente de Employee por cada uno */}
        {employees.map(employee => (
          <Employee
            employee={employee.name}
            getChildren={getChildren}
            handleCreateChild={handleCreateChild}
          />
        ))}
      </ul>
    </div>
  );
}

export default Chart;
