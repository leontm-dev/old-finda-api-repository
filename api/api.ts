// Imports

import Express, { Router } from "express";

// Presets

const apiRouter = Express.Router();

// API-Imports

import validationRouter from "./validation/validate";
import newsRouter from "./news/news";
import testingRouter from "./testing/testing";

// Routes

apiRouter.use("/validate", validationRouter);
apiRouter.use("/news", newsRouter);
apiRouter.use("/testing", testingRouter);

// Exports

export default apiRouter;
