/** @jsx jsx */
import React, { useState } from "react";
import { jsx } from "@emotion/core";
import ChevronRigth from "./icons/chevron-rigth";
import NewEmployee from "./new-employee";

const avatar = {
  width: "40px",
  height: "40px",
  borderRadius: "50%"
};

const item = {
  display: "flex",
  alignItems: "center",
  borderBottom: "2px solid #ececec",
  color: "#000"
};

const title = {
  color: "#979797",
  margin: "0"
};

const wrapIcon = {
  backgroundColor: "#d9e7fd",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginLeft: "auto",
  borderRadius: "50%",
  color: "#223fce",
  width: "36px",
  height: "36px"
};

const name = {
  textTransform: "capitalize",
  margin: "0",
  fontSize: "18px"
};

function Avatar({ user, ...props }) {
  return (
    <span
      role="menuitem"
      css={{
        display: "flex",
        alignItems: "center"
      }}
      {...props}
    >
      <img src={user.photo} css={avatar} alt="123" />
      <ChevronRigth
        css={{
          margin: "5px",
          color: "#979797"
        }}
      />
    </span>
  );
}

function Employee({ employee, onClick }) {
  return (
    <div css={item}>
      <img src={employee.photo} css={avatar} alt="123" />
      <div
        css={{
          margin: "0 8px"
        }}
      >
        <h4 css={name}>{employee.name}</h4>
        <div css={title}>{employee.title}</div>
      </div>
      <div css={wrapIcon} onClick={onClick}>
        <ChevronRigth />
      </div>
    </div>
  );
}

function MobileChart({ getChildren, parent, handleCreateChild }) {
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

  const card = {
    background: "#fff",
    borderRadius: "8px",
    color: "#123",
    boxShadow: "2px 4px 24px 0 rgba(0, 0, 0, 0.15)"
  };

  const header = {
    padding: "16px",
    boxShadow: "2px 4px 24px 0 rgba(0, 0, 0, 0.15)",
    display: "flex"
  };

  const items = {
    margin: "0",
    padding: "16px",
    listStyle: "none",
    minHeight: "100px"
  };

  return (
    <div
      css={{
        padding: "16px"
      }}
    >
      <div
        css={{
          textAlign: "center",
          margin: "1em"
        }}
      >
        <h1
          css={{
            fontSize: "25px"
          }}
        >
          Company Name
        </h1>
        <h4
          css={{
            opacity: "0.8"
          }}
        >
          Organization chart
        </h4>
      </div>

      <div css={{ ...card, marginBottom: "1.5em" }}>
        <div
          css={{ ...header, "span:last-child": { svg: { display: "none" } } }}
        >
          {list.map(employee => (
            <Avatar
              user={employee}
              onClick={() => handleChangeParent(employee)}
              key={employee.id}
            />
          ))}
        </div>
      </div>

      <div css={card}>
        <div
          css={{
            display: "flex",
            alignItems: "center",
            padding: "16px",
            boxShadow: "2px 4px 24px 0 rgba(0, 0, 0, 0.15)"
          }}
        >
          <img
            src={employeActive.photo}
            alt={employeActive.name}
            css={avatar}
          />
          <div
            css={{
              margin: "0 8px",
              lineHeight: "1.3"
            }}
          >
            <h4 css={name}>{employeActive.name}</h4>
            <div css={title}>{employeActive.title}</div>
          </div>
          <NewEmployee
            employee={employeActive}
            handleCreateChild={handleCreateChild}
          />
        </div>

        <article css={items}>
          {getChildren(employeActive.id).map(employee => (
            <Employee
              key={employee.id}
              onClick={() => handleChange(employee)}
              employee={employee}
            />
          ))}
        </article>
      </div>
    </div>
  );
}

export default MobileChart;
