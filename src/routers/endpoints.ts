interface Routes {
  login: string;
  slash: string;
  coins: string;
  createCoin: string;
  users: string;
  delete: string;
  id: string;
  create: string;
  register: string;
  coin: string;
}

const endpoints: Routes = {
  login: "/login",
  slash: "/",
  coins: "/coins",
  createCoin: "/create",
  users: "/users",
  delete: "/delete",
  id: "/:id",
  create: "/create",
  register: "/register",
  coin: "/coin",
};

export default endpoints;
