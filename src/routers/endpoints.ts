interface Routes {
  login: string;
  home: string;
  coins: string;
  myCoins: string;
  users: string;
  delete: string;
  id: string;
}

const endpoints: Routes = {
  login: "/login",
  home: "/",
  coins: "/coins",
  myCoins: "/my-coins",
  users: "/users",
  delete: "/delete",
  id: "/:id",
};

export default endpoints;
