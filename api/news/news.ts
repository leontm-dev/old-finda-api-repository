// Imports

import Express from "express";

// Presets

const newsRouter = Express.Router();

// API-Imports

import changeAuthorRouter from "./change-author";
import createRouter from "./create";
import deleteRouter from "./delete";
import editDateRouter from "./edit-date";
import editDescriptionRouter from "./edit-description";
import editTitleRouter from "./edit-title";
import getRouter from "./get";

// Routes

newsRouter.use("/change-author", changeAuthorRouter);
newsRouter.use("/create", createRouter);
newsRouter.use("/delete", deleteRouter);
newsRouter.use("/edit-date", editDateRouter);
newsRouter.use("/edit-description", editDescriptionRouter);
newsRouter.use("/edit-title", editTitleRouter);
newsRouter.use("/get", getRouter);

// Exports

export default newsRouter;
