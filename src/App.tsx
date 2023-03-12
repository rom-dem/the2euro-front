import { Outlet } from "react-router-dom";
import Loading from "./components/Loading/Loading";
import Modal from "./components/Modal/Modal";
import { useAppSelector } from "./store/hooks";

const App = () => {
  const { message, isLoading } = useAppSelector((state) => state.ui);

  return (
    <div className="cointainer">
      <Outlet />
      {isLoading && <Loading />}
      {message && <Modal />}
    </div>
  );
};

export default App;
