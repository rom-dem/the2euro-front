import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtil/renderWithProviders";
import CreateForm from "./CreateForm";

describe("Given CreateFrom component", () => {
  describe("When rendered", () => {
    test("Then it should show a label with text 'Country'", () => {
      const expectedLabelText = /country/i;

      renderWithProviders(<CreateForm />);
      const labelCountry = screen.getByLabelText(expectedLabelText);

      expect(labelCountry).toBeInTheDocument();
    });
  });
});
