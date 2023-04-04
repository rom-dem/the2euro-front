import { rest } from "msw";
import endpoints from "../routers/endpoints";
import { mockCoinsFromApi } from "./coinMocks";

export const handlers = [
  rest.post(
    `${process.env.REACT_APP_API_URL}${endpoints.users}${endpoints.login}`,
    async (req, res, context) =>
      res(context.status(200), context.json({ token: "1234asdf" }))
  ),
  rest.get(
    `${process.env.REACT_APP_API_URL}${endpoints.coins}`,
    async (req, res, context) =>
      res(context.status(200), context.json(mockCoinsFromApi))
  ),
  rest.delete(
    `${process.env.REACT_APP_API_URL}${endpoints.coins}${endpoints.delete}${endpoints.id}`,
    async (req, res, context) =>
      res(context.status(200), context.json(mockCoinsFromApi))
  ),
  rest.post(
    `${process.env.REACT_APP_API_URL}${endpoints.coins}${endpoints.create}`,
    async (req, res, context) =>
      res(context.status(201), context.json(mockCoinsFromApi))
  ),
  rest.get(
    `${process.env.REACT_APP_API_URL}${endpoints.coins}${endpoints.id}`,
    async (req, res, context) =>
      res(context.status(200), context.json(mockCoinsFromApi))
  ),
  rest.post(
    `${process.env.REACT_APP_API_URL}${endpoints.users}${endpoints.register}`,
    async (req, res, context) => res(context.status(201))
  ),
];

export const errorHandlers = [
  rest.post(
    `${process.env.REACT_APP_API_URL}${endpoints.users}${endpoints.login}`,
    async (req, res, context) => res(context.status(401))
  ),
  rest.get(
    `${process.env.REACT_APP_API_URL}${endpoints.coins}`,
    async (req, res, context) => res(context.status(500))
  ),
  rest.delete(
    `${process.env.REACT_APP_API_URL}${endpoints.coins}${endpoints.delete}${endpoints.id}`,
    async (req, res, context) => res(context.status(500))
  ),
  rest.post(
    `${process.env.REACT_APP_API_URL}${endpoints.coins}${endpoints.create}`,
    async (req, res, context) => res(context.status(500))
  ),
  rest.get(
    `${process.env.REACT_APP_API_URL}${endpoints.coins}${endpoints.id}`,
    async (req, res, context) => res(context.status(500))
  ),
  rest.post(
    `${process.env.REACT_APP_API_URL}${endpoints.users}${endpoints.register}`,
    async (req, res, context) => res(context.status(400))
  ),
];
