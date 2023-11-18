// Imports

import Express from "express";
import env from "dotenv";
import path from "path";
import cors from "cors";

// Presets

const app = Express();

// Configs

app.use(Express.urlencoded({ extended: true }));
app.use(Express.json());
app.use(
  cors({
    methods: ["GET", "POST", "DELETE", "PATCH"],
    origin: ["https://official.finda-app.repl.co/*", "https://*.find-a.app/*"],
  })
);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "Views"));
app.use(Express.static(path.join(__dirname, "Public")));
app.listen(3030, () => {
  console.log("Server running on port 2000");
});

// API-Imports

import apiRouter from "./api/api";

// Code

app.use("/api", apiRouter);
