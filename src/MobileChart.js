/** @jsx jsx */
import React, { useState } from "react";
import { jsx } from "@emotion/core";
import ChevronRigth from "./icons/chevron-rigth";

function Avatar({ user, ...props }) {
  const wrap = {
    display: "flex",
    alignItems: "center"
  };

  const avatar = {
    width: "40px",
    height: "40px",
    borderRadius: "50%"
  };

  const icon = {
    margin: "5px",
    color: "#979797"
  };

  return (
    <span role="menuitem" css={wrap} {...props}>
      <img src={user.image} css={avatar} alt="123" />
      <ChevronRigth css={icon} />
    </span>
  );
}

function Employee({ employee, onClick }) {
  const item = {
    display: "flex",
    alignItems: "center",
    padding: "16px",
    borderBottom: "2px solid #ececec",
    color: "#000"
  };

  const avatar = {
    width: "40px",
    height: "40px",
    borderRadius: "50%"
  };

  const title = {
    color: "#979797",
    margin: "0"
  };

  const name = {
    textTransform: "capitalize",
    margin: "0",
    fontSize: "18px"
  };

  return (
    <li css={item}>
      <img src={employee.image} css={avatar} alt="123" />
      <div
        css={{
          margin: "0 8px"
        }}
      >
        <h4 css={name}>{employee.name}</h4>
        <div css={title}>{employee.title}</div>
      </div>
      <div
        css={{
          backgroundColor: "#d9e7fd",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: "auto",
          borderRadius: "50%",
          color: "#223fce",
          width: "36px",
          height: "36px"
        }}
        onClick={onClick}
      >
        <ChevronRigth />
      </div>
    </li>
  );
}

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
      <h2>Chart organigram</h2>
      <div css={card}>
        <div css={header}>
          {list.map(employee => (
            <Avatar
              user={employee}
              onClick={() => handleChangeParent(employee)}
              key={employee.id}
            />
          ))}
        </div>
        <ul css={items}>
          {getChildren(employeActive.id).map(employee => (
            <Employee
              key={employee.id}
              onClick={() => handleChange(employee)}
              employee={employee}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MobileChart;
