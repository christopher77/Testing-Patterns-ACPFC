import React, { useState } from "react";
import Employee from "./employee";

const data = [
  {
    id: 1,
    name: "Christopher Roa",
    title: "CEO",
    parentId: null
  },
  {
    id: 2,
    name: "Frank Condezo",
    title: "CTO",
    parentId: 1
  },
  {
    id: 3,
    name: "Angie Gonzales",
    title: "DEV",
    parentId: 1
  },
  {
    id: 4,
    name: "Carlos Sandoval",
    title: "DEV",
    parentId: 2
  },
  {
    id: 5,
    name: "Paul Tomas",
    title: "Designer",
    parentId: 2
  }
];

function Chart() {
  const [list, setList] = useState(data);

  function getChilds(id) {
    return list.filter(employee => employee.parentId === id);
  }

  function addItem(item) {
    setList([...list, item]);
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
        <Employee employee={list[0]} getChilds={getChilds} addItem={addItem} />
      </ul>
    </div>
  );
}

export default Chart;
