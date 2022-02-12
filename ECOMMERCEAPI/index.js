const express = require("express");
const app = express();
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");

const mongoose = require("mongoose");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("db connection successfull"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("app is running" + port);
});
