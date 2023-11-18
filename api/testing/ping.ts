// Imports

import Express from "express";
import fs from "fs-extra";

// Presets

const pingRouter = Express.Router();

// Code

pingRouter.get("/ping", (req, res) => {
  res.status(200).send("Pong");
});

// Exports

export default pingRouter;
