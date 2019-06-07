/** @jsx jsx */
import React, { useState } from "react";
import { jsx } from "@emotion/core";
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
        <Employee
          employee={employees[0]}
          getChildren={getChildren}
          handleCreateChild={handleCreateChild}
        />
      </ul>
    </div>
  );
}

export default Chart;
