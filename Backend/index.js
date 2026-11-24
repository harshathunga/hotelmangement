import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
import sequlize from "./config/db.js";
import { users, companies } from "./Models/relations.js";
const app = express(); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:5173", "http://10.22.10.116:5173/"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

async function testConnection() {
    try{
        await sequlize.authenticate();
        console.log("Database connected");
        await sequlize.sync({ alter: true });
        console.log("Database synchronized");
        app.listen(process.env.port, () => {
  console.log("Server running on", process.env.port);
});
    } catch (error) {
        console.error("Error connecting to the database:", error); 
    }
}

testConnection();

// app.listen(process.env.port, () => {
//   console.log("Server running on", process.env.port);
// });