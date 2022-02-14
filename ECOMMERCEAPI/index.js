const express = require("express");
const app = express();
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const orderRoute = require("./routes/order");
const cartROute = require("./routes/cart");

const mongoose = require("mongoose");
const { application } = require("express");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("db connection successfull"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartROute);
app.use("/api/orders", orderRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("app is running" + port);
});
