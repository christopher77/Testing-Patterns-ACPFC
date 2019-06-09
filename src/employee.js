/** @jsx jsx */
import React, { useState } from "react";
import { jsx, Global } from "@emotion/core";
import NewEmployee from "./new-employee";
import styles from "./ui/styles";

function Employee({ employee, getChildren, handleCreateChild }) {
  const children = getChildren(employee.id);

  return (
    <li
      css={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        position: "relative",
        listStyleType: "none",
        padding: "1em 0.5em 0 0.5em",
        color: "black"
      }}
    >
      <div
        css={{
          ...styles.center,
          backgroundColor: "white",
          borderRadius: 4,
          height: 56,
          padding: 8,
          boxSizing: "border-box",
          width: 200,
          justifyContent: "flex-start",
          ":hover>button": { display: "block" }
        }}
      >
        {employee.photo && <img
          src={employee.photo}
          alt="123"
          width="40"
          height="40"
          css={{
            borderRadius: "50%",
            overflow: "hidden",
            backgroundColor: "rgba(0, 0, 0, 0.1)"
          }}
        />}
        
        <p
          css={{
            display: "flex",
            flexDirection: "column",
            fontSize: 16,
            lineHeight: "18px",
            margin: 0,
            marginLeft: 8
          }}
        >
          <span>{employee.name}</span>
          <span
            css={{
              fontSize: 14,
              color: "#686565",
              textAlign: "left"
            }}
          >
            {employee.title}
          </span>
        </p>
        <NewEmployee
          handleCreateChild={handleCreateChild}
          employee={employee}
          css={{ position: "relatve" }}
        />
      </div>
      {children.length !== 0 && (
        <ul
          css={{
            display: "flex",
            justifyContent: "space-between",
            margin: "1em",
            position: "relative",
            padding: 0
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
