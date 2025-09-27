import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { InputField } from "./InputField";
import "@testing-library/jest-dom";

describe("InputField", () => {
  it("renders label correctly", () => {
    render(<InputField label="Username" placeholder="Enter username" />);
    expect(screen.getByLabelText("Username")).toBeInTheDocument();
  });
});
