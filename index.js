const express = require("express");
const cors = require("cors");
const app = express();
const bodyPaser = require("body-parser");
const mongoose = require("mongoose");
var morgan = require("morgan");
const dotenv = require("dotenv");
const tourRoute = require("./routes/tour");
const guideRoute = require("./routes/guide");

dotenv.config();

//CONNECT DATABASE

const MONGODB_URL =
  process.env.MONGODB_URL ||
  "mongodb+srv://NguyenTran:Tbn123890@cluster0.twfqk.mongodb.net/";

mongoose
  .connect(MONGODB_URL)
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
app.use("/v1/guide", guideRoute);

app.listen(8000, () => {
  console.log("Server is running.....");
});
