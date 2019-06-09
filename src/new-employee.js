/** @jsx jsx */
import React, { useState } from "react";
import { jsx } from "@emotion/core";
import Button from "./ui/button";
import InputText from "./ui/input-text";
import styles from "./ui/styles";

function Employee({ employee, handleCreateChild, ...props }) {
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
          top: 50,
          margin: "auto",
          paddingBottom: 4,
          zIndex: 9,
          display: "none",
          ":hover": { display: "block" },
          ":focus": { outline: "none" }
        }}
      >
        +
      </button>
      {isDialogOpen && (
        <div
          css={{
            backgroundColor: "rgba(0, 0, 0, .8)",
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
              padding: 24,
              width: "80%",
              maxWidth: 360,
              zIndex: 110
            }}
          >
            <h3
              css={{
                margin: 0,
                fontWeight: "500",
                textAlign: "center",
                fontSize: "22px",
                fontWeight: "bold"
              }}
            >
              Add new Employee
            </h3>
            <form onSubmit={handleSubmit} css={{ textAlign: "left" }}>
              <label
                htmlFor="name-employee"
                css={{
                  margin: 0,
                  textAlign: "left"
                }}
              >
                Name employee
              </label>
              <InputText
                autocomplete="off"
                id="name-employee"
                type="text"
                placeholder="Name employee"
                name="name"
                value={fields.name}
                onChange={handleChange}
                css={{ marginBottom: "16px" }}
                required
              />
              <label
                htmlFor="title-employee"
                css={{
                  margin: 0,
                  textAlign: "left"
                }}
              >
                Title employee
              </label>
              <InputText
                autocomplete="off"
                htmlFor="title-employee"
                type="text"
                placeholder="CEO"
                name="title"
                value={fields.title}
                onChange={handleChange}
                css={{ marginBottom: "16px" }}
                required
              />
              <label
                htmlFor="photo-employee"
                css={{
                  margin: 0,
                  textAlign: "left"
                }}
              >
                *Photo employee
              </label>

              <InputText
                autocomplete="off"
                htmlFor="photo-employee"
                type="text"
                placeholder="Insert a URL"
                name="photo"
                value={fields.photo}
                onChange={handleChange}
              />
              <div css={{ display: "flex", justifyContent: "flex-end" }}>
                <Button
                  css={{ marginTop: 24, order: "2", marginLeft: 8 }}
                  type="submit"
                >
                  ADD
                </Button>
                <Button
                  css={{
                    marginTop: 24,
                    textTransform: "capitalize",
                    backgroundColor: "rgba(146, 146, 146, 0.16)",
                    color: "black",
                    order: "1"
                  }}
                  type="submit"
                  aria-label="Close create employee dialog"
                  onClick={handleCloseClick}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Employee;
