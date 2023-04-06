import useToken from "../../hooks/useToken/useToken";
import Layout from "../Layout/Layout";

const App = () => {
  const { saveToken } = useToken();

  saveToken();
  return <Layout />;
};

export default App;
