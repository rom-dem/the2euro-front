import { act, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { coinAndorra2018CreateForm } from "../../mocks/coinMocks";
import { renderRouterWithProviders } from "../../testUtil/renderRouterWithProviders";
import CreateForm from "./CreateForm";

const mockSubmit = jest.fn();
jest.mock("../../hooks/useApi/useApi", () => () => ({
  createCoin: mockSubmit,
}));

describe("Given CreateFrom component", () => {
  describe("When rendered", () => {
    test("Then it should show a label with text 'Country'", () => {
      const expectedLabelText = /country/i;

      renderRouterWithProviders({}, <CreateForm />);
      const labelCountry = screen.getByLabelText(expectedLabelText);

      expect(labelCountry).toBeInTheDocument();
    });
  });

  describe("When rendered and a user inputs all the coin information for Andorra 2018 coin", () => {
    test("Then it should call the createCoin function", async () => {
      const countryLabelText = /country/i;
      const yearLabelText = /year/i;
      const issuingVolumeLabelText = /issuing volume/i;
      const imageLabelText = /coin image url/i;
      const featureLabelText = /short description/i;
      const descriptionLabelText = /long description/i;
      const buttonText = /add new coin/i;

      renderRouterWithProviders({}, <CreateForm />);
      const contryInput = screen.getByRole("combobox", {
        name: countryLabelText,
      });
      const yearInput = screen.getByRole("combobox", { name: yearLabelText });
      const issuingVolumeInput = screen.getByLabelText(issuingVolumeLabelText);
      const imageInput = screen.getByLabelText(imageLabelText);
      const featureInput = screen.getByLabelText(featureLabelText);
      const descriptionInput = screen.getByLabelText(descriptionLabelText);
      const submitButton = screen.getByRole("button", { name: buttonText });

      await act(
        async () =>
          await userEvent.selectOptions(
            contryInput,
            coinAndorra2018CreateForm.country
          )
      );
      await act(
        async () =>
          await userEvent.selectOptions(
            yearInput,
            coinAndorra2018CreateForm.year
          )
      );
      await act(
        async () =>
          await userEvent.type(
            issuingVolumeInput,
            `${coinAndorra2018CreateForm.issuingVolume}`
          )
      );
      await act(
        async () =>
          await userEvent.type(imageInput, coinAndorra2018CreateForm.image)
      );
      await act(
        async () =>
          await userEvent.type(featureInput, coinAndorra2018CreateForm.feature)
      );
      await act(
        async () =>
          await userEvent.type(
            descriptionInput,
            coinAndorra2018CreateForm.description
          )
      );
      await act(async () => await userEvent.click(submitButton));
      expect(mockSubmit).toHaveBeenCalledWith(coinAndorra2018CreateForm);
    });
  });
});
