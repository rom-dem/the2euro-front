interface Routes {
  login: string;
  home: string;
  coins: string;
  myCoins: string;
  users: string;
  delete: string;
  id: string;
  create: string;
}

const endpoints: Routes = {
  login: "/login",
  home: "/",
  coins: "/coins",
  myCoins: "/my-coins",
  users: "/users",
  delete: "/delete",
  id: "/:id",
  create: "/create",
};

export default endpoints;
