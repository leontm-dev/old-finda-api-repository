// Imports

import Express from "express";
import fs from "fs-extra";

// Presets

const passwordRouter = Express.Router();

// Code

passwordRouter.get("/password=:password", (req, res) => {
  if (process.env["KEY"] === req.params.password) {
    res.status(200);
  } else {
    res.status(401);
  }
});

// Exports

export default passwordRouter;
