interface Routes {
  login: string;
  home: string;
  coins: string;
  createCoin: string;
  users: string;
  delete: string;
  id: string;
  create: string;
  register: string;
}

const endpoints: Routes = {
  login: "/login",
  home: "/",
  coins: "/coins",
  createCoin: "/create",
  users: "/users",
  delete: "/delete",
  id: "/:id",
  create: "/create",
  register: "/register",
};

export default endpoints;
