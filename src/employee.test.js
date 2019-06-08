import React from "react";
import { render } from "@testing-library/react";
import Employee from "./employee";

test("Render employee", () => {
  const employee = [
    {
      id: "Fri Jun 07 2019 17:08:11 GMT-0500 (Peru Standard Time)",
      name: "CEO",
      title: "CEO",
      parentId: null
    },
    {
      id: "Fri Jun 07 2019 17:08:16 GMT-0500 (Peru Standard Time)",
      name: "Carlos",
      title: "Dev",
      parentId: "Fri Jun 07 2019 17:08:11 GMT-0500 (Peru Standard Time)"
    },
    {
      id: "Fri Jun 07 2019 17:08:21 GMT-0500 (Peru Standard Time)",
      name: "Daniel",
      title: "Dev",
      parentId: "Fri Jun 07 2019 17:08:16 GMT-0500 (Peru Standard Time)"
    }
  ];

  function getChildren(id) {
    return employee.filter(employee => employee.parentId === id);
  }
  const handleCreateChild = jest.fn();
  const { asFragment } = render(
    <Employee
      employee={employee}
      getChildren={getChildren}
      handleCreateChild={handleCreateChild}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});
