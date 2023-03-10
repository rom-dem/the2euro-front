import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When rendered with a text 'Log in'", () => {
    test("Then it should show 'Log in' a button text", () => {
      const buttonText = "Log in";

      renderWithProviders(<Button text={buttonText} isDisabled={false} />);
      const button = screen.getByRole("button", { name: buttonText });

      expect(button).toBeInTheDocument();
    });
  });
});
