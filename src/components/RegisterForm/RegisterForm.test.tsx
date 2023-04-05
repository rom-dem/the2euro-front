import { act, screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtil/renderWithProviders";
import RegisterForm from "./RegisterForm";
import { UserRegisterCredentials } from "../../hooks/useUser/types";
import userEvent from "@testing-library/user-event";

const mockSubmit = jest.fn();
jest.mock("../../hooks/useUser/useUser", () => () => ({
  registerUser: mockSubmit,
}));

describe("Given a RegisterForm component", () => {
  describe("When rendered", () => {
    test("Then it should show 3 labels with text 'Name', 'Email', 'Password' and a submit button", () => {
      const expectedLabelName = /name/i;
      const expectedLabelEmail = /email/i;
      const expectedLabelPassword = /password/i;
      const expectedButtonText = /register/i;

      renderWithProviders(<RegisterForm />);
      const nameInput = screen.getByLabelText(expectedLabelName);
      const emailInput = screen.getByLabelText(expectedLabelEmail);
      const passwordInput = screen.getByLabelText(expectedLabelPassword);
      const registerButton = screen.getByRole("button", {
        name: expectedButtonText,
      });

      expect(nameInput).toBeInTheDocument();
      expect(emailInput).toBeInTheDocument();
      expect(passwordInput).toBeInTheDocument();
      expect(registerButton).toBeInTheDocument();
    });
  });

  describe("When rendered and a user inputs a user name, an email and a password and submits the form", () => {
    const mockUser: UserRegisterCredentials = {
      username: "Alejandro",
      email: "alejandro@test.com",
      password: "password123",
    };
    test("Then it should call the registerUser function", async () => {
      const expectedLabelName = /name/i;
      const expectedLabelEmail = /email/i;
      const expectedLabelPassword = /password/i;
      const expectedButtonText = /register/i;

      renderWithProviders(<RegisterForm />);
      const nameInput = screen.getByLabelText(expectedLabelName);
      const emailInput = screen.getByLabelText(expectedLabelEmail);
      const passwordInput = screen.getByLabelText(expectedLabelPassword);
      const registerButton = screen.getByRole("button", {
        name: expectedButtonText,
      });

      await act(async () => await userEvent.type(nameInput, mockUser.username));
      await act(async () => await userEvent.type(emailInput, mockUser.email));
      await act(
        async () => await userEvent.type(passwordInput, mockUser.password)
      );
      await act(async () => await userEvent.click(registerButton));

      expect(mockSubmit).toHaveBeenCalledWith(mockUser);
    });
  });
});
