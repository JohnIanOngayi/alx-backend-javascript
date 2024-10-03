#!/usr/bin/node

import express from "express";
import mapRoutes from "./routes/index.js";

const app = express();

mapRoutes(app);

app.listen(1245, () => console.log("Server runnning on port 1245"));

export default app;
