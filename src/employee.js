/** @jsx jsx */
import React, { useState } from "react";
import { jsx, Global } from "@emotion/core";
import general from "./global";

function Employee({ employee, getChildren, handleCreateChild }) {
  const [child, setChild] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const children = getChildren(employee.id);

  function handleOpenClick(event) {
    setIsDialogOpen(true);
    event.target.blur();
  }

  function handleCloseClick(event) {
    setIsDialogOpen(false);
    event.target.blur();
  }

  function handleChange(event) {
    setChild(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleCreateChild(child, employee.id);
    setIsDialogOpen(false);
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
        <button type="button" onClick={handleOpenClick}>
          +
        </button>
      </div>
      {isDialogOpen && (
        <div
          css={{
            backgroundColor: "rgba(0, 0, 0, .5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 100
          }}
        >
          <div
            role="dialog"
            css={{
              background: "white",
              border: "none",
              borderRadius: ".25rem",
              position: "fixed",
              top: "50%",
              transform: "translateY(-50%)",
              padding: "2rem 1rem",
              width: "80%",
              maxWidth: 360,
              zIndex: 110
            }}
          >
            <button
              css={{
                backgroundColor: "28F6ED",
                borderRadius: ".5rem",
                color: "white",
                width: "100%",
                padding: ".75rem .5rem",
                boxSizing: "border-box",
                fontSize: ".9rem",
                fontWeight: "500",
                textTransform: "uppercase",
                outline: "none"
              }}
              aria-label="Close create employee dialog"
              onClick={handleCloseClick}
            >
              X
            </button>
            <h3 css={{ margin: 0, fontWeight: "500", textAlign: "center" }}>
              Create a new employee
            </h3>
            <form onSubmit={handleSubmit} disabled={child.includes(child)}>
              <input
                type="text"
                placeholder="Employee "
                value={child}
                onChange={handleChange}
                css={{
                  border: "none",
                  borderBottom: "1px solid #ccc",
                  padding: ".5rem 1rem",
                  fontSize: "1.2rem",
                  boxSizing: "border-box",
                  width: "100%",
                  outline: "none",
                  display: "block",
                  transition: "border-bottom-color 300ms ease",
                  ":focus": {
                    borderBottomColor: "blue"
                  }
                }}
              />
              <button
                css={{
                  backgroundColor: "lightblue",
                  borderRadius: ".5rem",
                  color: "white",
                  width: "100%",
                  padding: ".75rem .5rem",
                  boxSizing: "border-box",
                  fontSize: ".9rem",
                  fontWeight: "500",
                  textTransform: "uppercase",
                  outline: "none"
                }}
                type="submit"
              >
                Create new
              </button>
            </form>
          </div>
        </div>
      )}

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
