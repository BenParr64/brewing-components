import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ABVCalculator } from "./AbvCalculator";

describe("ABVCalculator", () => {
  test("renders with default values", () => {
    render(<ABVCalculator />);
    expect(screen.getByLabelText("Original Gravity")).toHaveAttribute(
      "value",
      "1.05"
    );
    expect(screen.getByLabelText("Final Gravity")).toHaveAttribute(
      "value",
      "1.01"
    );
  });

  test("renders with custom initial values", () => {
    render(
      <ABVCalculator initialOriginalGravity={1.08} initialFinalGravity={1.02} />
    );
    expect(screen.getByLabelText("Original Gravity")).toHaveAttribute(
      "value",
      "1.08"
    );
    expect(screen.getByLabelText("Final Gravity")).toHaveAttribute(
      "value",
      "1.02"
    );
  });

  test("calculates ABV correctly", () => {
    render(<ABVCalculator />);
    expect(screen.getByText(/ABV:/)).toHaveTextContent("ABV: 5.34%");

    fireEvent.change(screen.getByLabelText("Original Gravity"), {
      target: { value: 1.08 },
    });
    fireEvent.change(screen.getByLabelText("Final Gravity"), {
      target: { value: 1.02 },
    });
    expect(screen.getByText(/ABV:/)).toHaveTextContent("ABV: 8.44%");
  });

  test("calls onABVChange with the calculated ABV value", () => {
    const onABVChange = jest.fn();
    render(<ABVCalculator onABVChange={onABVChange} />);

    expect(onABVChange.mock.calls[0][0]).toBeCloseTo(5.34, 2);

    fireEvent.change(screen.getByLabelText("Original Gravity"), {
      target: { value: 1.08 },
    });
    fireEvent.change(screen.getByLabelText("Final Gravity"), {
      target: { value: 1.02 },
    });

    expect(onABVChange.mock.calls[2][0]).toBeCloseTo(8.44, 2);
});
});
