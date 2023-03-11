import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtil/renderWithProviders";
import Loading from "./Loading";

describe("Given a Loading component", () => {
  describe("When rendered", () => {
    test("Then it should show a '€' sign with aria role 'status'", () => {
      const ariaRole = "status";

      renderWithProviders(<Loading />);
      const loader = screen.getByRole(ariaRole);

      expect(loader).toBeInTheDocument();
    });
  });
});
