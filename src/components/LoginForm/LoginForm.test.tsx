import { act, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { UserCredentials } from "../../hooks/types";
import { renderWithProviders } from "../../testUtil/renderWithProviders";
import LoginForm from "./LoginForm";

const mockSubmit = jest.fn();
jest.mock("../../hooks/useUser", () => () => ({ loginUser: mockSubmit }));

describe("Given a LoginForm component", () => {
  describe("When rendered", () => {
    test("Then it should show a label with text 'Email'", () => {
      const expectedLabelText = /email/i;

      renderWithProviders(<LoginForm />);
      const labelEmail = screen.getByLabelText(expectedLabelText);

      expect(labelEmail).toBeInTheDocument();
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

  describe("When rendered and a user inputs an email 'test@test.com' and a password 'test1234' and submits the form", () => {
    const mockUser: UserCredentials = {
      email: "test@test.com",
      password: "test1234",
    };

    test("Then it should call the loginUser function", async () => {
      const emailLabelText = /email/i;
      const passwordLabelText = /password/i;
      const buttonText = /log in/i;

      renderWithProviders(<LoginForm />);
      const emailInput = screen.getByLabelText(emailLabelText);
      const passwordInput = screen.getByLabelText(passwordLabelText);
      const submitButton = screen.getByRole("button", { name: buttonText });

      await act(async () => await userEvent.type(emailInput, mockUser.email));
      await act(
        async () => await userEvent.type(passwordInput, mockUser.password)
      );
      await act(async () => await userEvent.click(submitButton));

      expect(mockSubmit).toHaveBeenCalledWith(mockUser);
    });
  });
});
