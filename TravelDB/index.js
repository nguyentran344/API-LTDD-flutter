const express = require("express");
const cors = require("cors");
const app = express();
const bodyPaser = require("body-parser");
const mongoose = require("mongoose");
var morgan = require("morgan");
const dotenv = require("dotenv");
const tourRoute = require("./routes/tour");

dotenv.config();

//CONNECT DATABASE

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("MongoDB Connected...");
  })
  .catch((err) => {
    console.error(err.message);
    process.exit(1);
  });

app.use(bodyPaser.json({ limit: "50mb" }));
app.use(cors());
app.use(morgan("common"));

//ROUTES
app.use("/v1/tour", tourRoute);

app.listen(8000, () => {
  console.log("Server is running.....");
});
