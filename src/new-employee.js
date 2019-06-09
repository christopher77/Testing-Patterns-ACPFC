/** @jsx jsx */
import React, { useState } from "react";
import { jsx } from "@emotion/core";
import Button from "./ui/button";
import InputText from "./ui/input-text";
import styles from "./ui/styles";

function Employee({ employee, handleCreateChild }) {
  const [fields, setFields] = useState({ name: "", title: "", photo: "" });
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  function handleOpenClick(event) {
    setIsDialogOpen(true);
    event.target.blur();
  }

  function handleCloseClick(event) {
    setIsDialogOpen(false);
    event.target.blur();
  }

  function handleChange(event) {
    setFields({ ...fields, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleCreateChild(fields, employee.id);
    setIsDialogOpen(false);
    setFields({ name: "", title: "", photo: "" });
  }

  return (
    <>
      <button
        type="button"
        onClick={handleOpenClick}
        css={{
          width: "36px",
          height: "36px",
          backgroundColor: "#d9e7fd",
          border: 0,
          padding: 0,
          borderRadius: "50%",
          color: "#223fce",
          fontSize: 24,
          cursor: "pointer",
          position: "absolute",
          left: 0,
          right: 0,
          top: 56,
          margin: "auto",
          paddingBottom: 4,
          display: "none",
          ":hover": { display: "block" }
        }}
      >
        +
      </button>
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
                backgroundColor: "transparent",
                borderRadius: ".5rem",
                padding: ".75rem .5rem",
                boxSizing: "border-box",
                fontSize: ".9rem",
                fontWeight: "500",
                textTransform: "uppercase",
                outline: "none",
                border: "none",
                position: "absolute",
                top: "0",
                right: "10px"
              }}
              aria-label="Close create employee dialog"
              onClick={handleCloseClick}
            >
              X
            </button>
            <h3 css={{ margin: 0, fontWeight: "500", textAlign: "center" }}>
              Add new Employee
            </h3>
            <form onSubmit={handleSubmit}>
              <InputText
                type="text"
                placeholder="Employee"
                name="name"
                value={fields.name}
                onChange={handleChange}
              />
              <InputText
                type="text"
                placeholder="Title"
                name="title"
                value={fields.title}
                onChange={handleChange}
              />
              <InputText
                type="text"
                placeholder="Photo"
                name="photo"
                value={fields.photo}
                onChange={handleChange}
              />
              <Button css={{ marginTop: 24 }} type="submit">
                Create new
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Employee;
