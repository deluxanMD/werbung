import { render, screen } from "@testing-library/react";
import WerHelperText from "./wer-helper-text.component";
import { FieldError } from "react-hook-form";

describe("wer-text-field-component", () => {
  const error: FieldError = {
    message: "Test Error Message",
    type: "required",
  };

  test("should display error message", () => {
    render(<WerHelperText error={error} />);
    const message = screen.getByText(/Test Error Message/i);
    expect(message).toBeInTheDocument();
  });
});
