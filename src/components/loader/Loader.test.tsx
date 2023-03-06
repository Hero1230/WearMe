import React from "react";
import { render, screen } from "@testing-library/react";
import Loader from "./Loader";
import { describe, it, expect } from "vitest";

describe("Loader component", () => {
  it("renders a loader icon", () => {
    render(<Loader />);
    const status = screen.getByRole("status");
    expect(status).toBeDefined();
  });
});
