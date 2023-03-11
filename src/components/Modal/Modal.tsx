import { ToastContainer } from "react-toastify";
import { useAppSelector } from "../../store/hooks";
import { showErrorModal, showSuccessModal } from "../../modals/modals";

const Modal = (): JSX.Element => {
  const { isError, message } = useAppSelector((state) => state.ui);

  if (isError) {
    showErrorModal(message);
  }

  if (!isError) {
    showSuccessModal(message);
  }

  return <ToastContainer />;
};

export default Modal;
