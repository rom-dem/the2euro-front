import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import Loading from "../Loading/Loading";
import Modal from "../Modal/Modal";
import Navigation from "../Navigation/Navigation";
import LayoutStyled from "./LayoutStyled";

const renderLoader = () => <Loading />;

const Layout = (): JSX.Element => {
  const { isLoading } = useAppSelector((state) => state.ui);

  return (
    <LayoutStyled>
      <Suspense fallback={renderLoader()}>
        <Outlet />
        {isLoading && <Loading />}
        <Modal />
        <Navigation />
      </Suspense>
    </LayoutStyled>
  );
};

export default Layout;
