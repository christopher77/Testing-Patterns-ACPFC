import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Form from "./form";

test("The form use setter sended", () => {
  const saveName = jest.fn();
  const { getByLabelText, asFragment } = render(
    <Form label={"label"} placeholder={"placeholder"} saveName={saveName} />
  );
  const input = getByLabelText("label");
  fireEvent.change(input, {
    target: {
      value: "Some name"
    }
  });
  fireEvent.submit(input);
  expect(saveName).toHaveBeenCalledWith("Some name");
  expect(asFragment()).toMatchSnapshot();
});
