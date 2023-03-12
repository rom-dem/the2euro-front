import { rest } from "msw";

const apiUrl = process.env.REACT_APP_API_URL;
const pathLogin = "/the2euro/login";

export const handlers = [
  rest.post(`${apiUrl}${pathLogin}`, async (req, res, context) =>
    res(context.status(200), context.json({ token: "1234asdf" }))
  ),
];
