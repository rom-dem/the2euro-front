import { Outlet } from "react-router-dom";
import Modal from "./components/Modal/Modal";
import { useAppSelector } from "./store/hooks";

const App = () => {
  const { message } = useAppSelector((state) => state.ui);

  return (
    <div className="cointainer">
      <Outlet />
      {message && <Modal />}
    </div>
  );
};

export default App;
