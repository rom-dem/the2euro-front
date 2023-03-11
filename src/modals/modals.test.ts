import { toast } from "react-toastify";
import { showErrorModal, showSuccessModal } from "./modals";

jest.mock("react-toastify", () => ({
  toast: {
    error: jest.fn(),
    success: jest.fn(),
  },
}));

describe("Given the modals functions", () => {
  describe("When showErrorModal is called with an error message 'Something went wrong'", () => {
    test("Then its toast.error function should be called with the error message", () => {
      const errorMessage = "Something went wrong";
      const errorOptions = {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        closeButton: false,
      };

      showErrorModal(errorMessage);

      expect(toast.error).toHaveBeenCalledWith(errorMessage, errorOptions);
    });
  });

  describe("When showSuccessModal is called with a success message 'Everything's coming up Milhouse'", () => {
    test("Then its toast.success function should be called with the success message", () => {
      const successMessage = "Everything's coming up Milhouse";
      const successOption = {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        closeButton: false,
      };

      showSuccessModal(successMessage);

      expect(toast.success).toHaveBeenCalledWith(successMessage, successOption);
    });
  });
});
