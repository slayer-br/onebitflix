import express from "express";
import { adminJs, adminJsRouter } from "./adminjs";
import { sequelize } from "./database";
import { router } from "./routes";

const app = express();

app.use(express.static("public"));
app.use(express.json())
app.use(adminJs.options.rootPath, adminJsRouter);
app.use(router);

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
