import {
  preloadedErrorUiState,
  preloadedSucessUiState,
} from "../../mocks/preloadedUiState";
import { showErrorModal, showSuccessModal } from "../../modals/modals";
import { renderRouterWithProviders } from "../../testUtil/renderRouterWithProviders";
import Modal from "./Modal";

jest.mock("../../modals/modals", () => ({
  showErrorModal: jest.fn(),
  showSuccessModal: jest.fn(),
}));

describe("Given a Modal component", () => {
  describe("When it is rendered with an error and the message 'Wrong credentials'", () => {
    test("Then it should render the ToastContainer component for error", () => {
      const expectedMessage = "Wrong credentials";

      renderRouterWithProviders({ ui: preloadedErrorUiState }, <Modal />);

      expect(showErrorModal).toHaveBeenCalledWith(expectedMessage);
    });
  });

  describe("When it is rendered with a success and the message 'New coin added'", () => {
    test("Then it should render the ToastContainer component for success", () => {
      const expectedMessage = "New coin added";

      renderRouterWithProviders({ ui: preloadedSucessUiState }, <Modal />);

      expect(showSuccessModal).toHaveBeenCalledWith(expectedMessage);
    });
  });
});
