/** @jsx jsx */
import React, { useState } from "react";
import { jsx, Global } from "@emotion/core";
import Employee from "./employee";
import MobileChart from "./MobileChart";

const initialMobile = window.innerWidth < 1000;

function Chart({ employees, handleCreateChild }) {
  const [mobile, setMobile] = React.useState(initialMobile);

  React.useEffect(() => {
    function updateDimensions() {
      if (window.innerWidth < 1000) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    }
    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  });

  function getChildren(id) {
    return employees.filter(employee => employee.parentId === id);
  }

  if (mobile) {
    return <MobileChart getChildren={getChildren} parent={employees[0]} />;
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
            employee={employee}
            getChildren={getChildren}
            handleCreateChild={handleCreateChild}
          />
        ))}
      </ul>
    </div>
  );
}

export default Chart;
