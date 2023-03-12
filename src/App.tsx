import { Outlet } from "react-router-dom";
import Loading from "./components/Loading/Loading";
import Modal from "./components/Modal/Modal";
import { useAppSelector } from "./store/hooks";

const App = () => {
  const { isLoading } = useAppSelector((state) => state.ui);

  return (
    <div className="cointainer">
      <Outlet />
      {isLoading && <Loading />}
      <Modal />
    </div>
  );
};

export default App;
