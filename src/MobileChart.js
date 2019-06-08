/** @jsx jsx */
import React, { useState } from "react";
import { jsx } from "@emotion/core";
import Employee from "./employee";

function MobileChart({ getChildren, parent }) {
  const [employeActive, setEmployeActive] = React.useState(parent);
  const [list, setList] = React.useState([parent]);

  function handleChange(employee) {
    setEmployeActive(employee);
    setList([...list, employee]);
  }

  function handleChangeParent(employee) {
    const parentIndex = list.findIndex(emp => emp.id === employee.id) + 1;
    setEmployeActive(employee);
    setList(list.slice(0, parentIndex));
  }

  return (
    <div
      css={{
        padding: "10px"
      }}
    >
      <div>
        {list.map(employee => (
          <span
            onClick={() => handleChangeParent(employee)}
            key={employee.id}
            role="menuitem"
          >
            {employee.name}({employee.title}) ->
          </span>
        ))}
      </div>
      <ul>
        <li>
          <div className="content">{employeActive.name}</div>
          <ul>
            {getChildren(employeActive.id).map(employee => (
              <li key={employee.id} onClick={() => handleChange(employee)}>
                {employee.name}
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default MobileChart;
