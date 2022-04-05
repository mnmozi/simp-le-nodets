import express from "express";
console.log("Hello People!");
const app = express();
app.use(express.json());
export default app;
