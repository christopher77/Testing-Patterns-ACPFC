import React from "react";
import { render } from "@testing-library/react";
import Chart from "./chart";

test("Render the new chart", () => {
  const employees = [
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

  const handleCreateChild = jest.fn();
  const { asFragment } = render(
    <Chart employees={employees} handleCreateChild={handleCreateChild} />
  );
  expect(asFragment()).toMatchSnapshot();
});
