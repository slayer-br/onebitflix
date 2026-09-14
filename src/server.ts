import express from "express";
import { sequelize } from "../database";

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected successfully!");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }

  console.log(`Server is running on port: ${PORT}`);
});
