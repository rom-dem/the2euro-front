import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils";
import LoginForm from "./LoginForm";

describe("Given a LoginForm component", () => {
  describe("When rendered", () => {
    test("Then it should show a label with text 'Email'", () => {
      const expectedLabelText = /email/i;

      renderWithProviders(<LoginForm />);
      const labelEmail = screen.getByLabelText(expectedLabelText);

      expect(labelEmail).toBeInTheDocument();
    });
  });

  test("Then it should show a label with text 'Password'", () => {
    const expectedLabelText = /password/i;

    renderWithProviders(<LoginForm />);
    const labelPassword = screen.getByLabelText(expectedLabelText);

    expect(labelPassword).toBeInTheDocument();
  });

  test("Then it should show 'Log in' button", () => {
    const expectedButtonText = /log in/i;

    renderWithProviders(<LoginForm />);
    const button = screen.getByRole("button", { name: expectedButtonText });

    expect(button).toBeInTheDocument();
  });
});
