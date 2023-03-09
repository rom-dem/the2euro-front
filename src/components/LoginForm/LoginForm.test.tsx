import { screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";
import { renderWithProviders } from "../../testUtils";
import LoginForm from "./LoginForm";

describe("Given a LoginForm component", () => {
  describe("When rendered", () => {
    test("Then it should show a label with text 'Email'", () => {
      const expectedLabelText = /email/i;

      renderWithProviders(
        <>
          <ThemeProvider theme={theme}>
            <LoginForm />
          </ThemeProvider>
        </>
      );
      const labelEmail = screen.getByLabelText(expectedLabelText);

      expect(labelEmail).toBeInTheDocument();
    });
  });

  test("Then it should show a label with text 'Password'", () => {
    const expectedLabelText = /password/i;

    renderWithProviders(
      <>
        <ThemeProvider theme={theme}>
          <LoginForm />
        </ThemeProvider>
      </>
    );
    const labelPassword = screen.getByLabelText(expectedLabelText);

    expect(labelPassword).toBeInTheDocument();
  });

  test("Then it should show 'Log in' button", () => {
    const expectedButtonText = /log in/i;

    renderWithProviders(
      <>
        <ThemeProvider theme={theme}>
          <LoginForm />
        </ThemeProvider>
      </>
    );
    const button = screen.getByRole("button", { name: expectedButtonText });

    expect(button).toBeInTheDocument();
  });
});
