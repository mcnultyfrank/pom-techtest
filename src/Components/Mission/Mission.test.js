import React from "react";
import { render } from "@testing-library/react";
import Mission from "./Mission";

describe("Mission tests", () => {
  it("should render", () => {
    expect(render(<Mission />)).toBeTruthy();
  });
});
