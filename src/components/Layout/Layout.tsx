import { Outlet } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import Loading from "../Loading/Loading";
import Modal from "../Modal/Modal";
import Navigation from "../Navigation/Navigation";
import LayoutStyled from "./LayoutStyled";

const Layout = (): JSX.Element => {
  const { isLoading } = useAppSelector((state) => state.ui);

  return (
    <LayoutStyled>
      <Outlet />
      {isLoading && <Loading />}
      <Modal />
      <Navigation />
    </LayoutStyled>
  );
};

export default Layout;
