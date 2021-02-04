import React from "react";
import { render } from "@testing-library/react";
import JoinedQueue from "./JoinedQueue";

describe("JoinedQueue tests", () => {
  it("should render", () => {
    expect(render(<JoinedQueue />)).toBeTruthy();
  });
});
