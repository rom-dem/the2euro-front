import { Outlet } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import Loading from "../Loading/Loading";
import Modal from "../Modal/Modal";
import Navigation from "../Navigation/Navigation";

const Layout = (): JSX.Element => {
  const { isLoading } = useAppSelector((state) => state.ui);

  return (
    <div className="cointainer">
      <Outlet />
      {isLoading && <Loading />}
      <Modal />
      <Navigation />
    </div>
  );
};

export default Layout;
