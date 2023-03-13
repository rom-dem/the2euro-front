import { Outlet } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import Loading from "../Loading/Loading";
import Modal from "../Modal/Modal";

const Layout = (): JSX.Element => {
  const { isLoading } = useAppSelector((state) => state.ui);

  return (
    <div className="cointainer">
      <Outlet />
      {isLoading && <Loading />}
      <Modal />
    </div>
  );
};

export default Layout;
