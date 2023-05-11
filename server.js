import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
dotenv.config();

import dalleRoute from "./routes/dalle.route.js";

// app
const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));
// routes
app.use("/api/v1/dalle", dalleRoute);

const port = process.env.PORT;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
