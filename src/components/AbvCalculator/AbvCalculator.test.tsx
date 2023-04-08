import { render, fireEvent, screen } from "@testing-library/react";
import { ABVCalculator } from "./AbvCalculator";

describe("ABVCalculator", () => {
  test("renders with default values", () => {
    render(<ABVCalculator />);
    expect(screen.getByLabelText("Original Gravity")).toHaveValue(1.05);
    expect(screen.getByLabelText("Final Gravity")).toHaveValue(1.01);
  });

  test("renders with custom initial values", () => {
    render(<ABVCalculator initialOriginalGravity={1.08} initialFinalGravity={1.02} />);
    expect(screen.getByLabelText("Original Gravity")).toHaveValue(1.08);
    expect(screen.getByLabelText("Final Gravity")).toHaveValue(1.02);
  });

  test("calculates ABV correctly", () => {
    render(<ABVCalculator />);
    expect(screen.getByText(/ABV:/)).toHaveTextContent("ABV: 5.25%");

    fireEvent.change(screen.getByLabelText("Original Gravity"), { target: { value: 1.08 } });
    fireEvent.change(screen.getByLabelText("Final Gravity"), { target: { value: 1.02 } });
    expect(screen.getByText(/ABV:/)).toHaveTextContent("ABV: 7.74%");
  });

  test("calls onABVChange with the calculated ABV value", () => {
    const onABVChange = jest.fn();
    render(<ABVCalculator onABVChange={onABVChange} />);

    expect(onABVChange).toHaveBeenCalledWith(5.25);

    fireEvent.change(screen.getByLabelText("Original Gravity"), { target: { value: 1.08 } });
    fireEvent.change(screen.getByLabelText("Final Gravity"), { target: { value: 1.02 } });

    expect(onABVChange).toHaveBeenCalledWith(7.74);
  });
});
