import { ToastContainer } from "react-toastify";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { showErrorModal, showSuccessModal } from "../../modals/modals";
import { useEffect } from "react";
import { unsetModalActionCreator } from "../../store/features/ui/uiSlice";

const Modal = (): JSX.Element => {
  const { isError, message, isSuccess } = useAppSelector((state) => state.ui);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isError) {
      showErrorModal(message);
    }
    if (isSuccess) {
      showSuccessModal(message);
    }
    dispatch(unsetModalActionCreator());
  }, [dispatch, isError, message, isSuccess]);

  return <ToastContainer />;
};

export default Modal;
