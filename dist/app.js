import express from "express";
import routes from "./api/index.js";
console.log("Hello People!");
const app = express();
app.use(express.json());
app.use("/", routes());
export default app;
