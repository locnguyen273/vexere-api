const express = require("express");
const path = require("path");
const { sequelize } = require("./models");
const { rootRouter } = require("./routers");
const app = express();

// cài đặt ứng dụng sử dụng kiểu json
app.use(express.json());

// cài đặt static file
const publicPathDirectory = path.join(__dirname, "./public");
app.use(express.static(publicPathDirectory));

// dùng router
app.use("/api/v1", rootRouter);

// listen event connect
app.listen(3000, async () => {
  console.log("App listening on http://localhost:3000");
  try {
    await sequelize.authenticate();
    console.log("connected");
  } catch (error) {
    console.error("error", error);
  }
});
