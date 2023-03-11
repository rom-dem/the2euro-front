import { ModalPayload, UiState } from "./types";
import {
  setModalActionCreator,
  uiReducer,
  unsetModalActionCreator,
} from "./uiSlice";

describe("Given a uiReducer reducer", () => {
  describe("When called with setModal action with a message 'Something went wrong'", () => {
    test("Then it should return a new state with property isError set to true and modal with the given message", () => {
      const currentUiState: UiState = {
        isError: false,
        modal: "",
        isLoading: false,
      };
      const modalMessage = "Something went wrong";
      const modalPayload: ModalPayload = {
        isError: true,
        modal: modalMessage,
      };

      const expectedState: UiState = {
        ...currentUiState,
        isError: true,
        modal: modalMessage,
      };
      const setModal = setModalActionCreator(modalPayload);
      const newUiState = uiReducer(currentUiState, setModal);

      expect(newUiState).toStrictEqual(expectedState);
    });
  });

  describe("When called with unsetModal action", () => {
    test("Then it should return a new state with property isError set to false and modal with an empty string", () => {
      const currentUiState: UiState = {
        isError: true,
        modal: "Something went wrong",
        isLoading: false,
      };
      const modalMessage = "";
      const expectedState: UiState = {
        ...currentUiState,
        isError: false,
        modal: modalMessage,
      };

      const unsetModal = unsetModalActionCreator();
      const newUiState = uiReducer(currentUiState, unsetModal);

      expect(newUiState).toStrictEqual(expectedState);
    });
  });
});
