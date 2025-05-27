const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const pinRoute = require('./routes/pins');
const userRoute = require('./routes/users');

dotenv.config();

const app = express();

app.use(cors()); // Enable CORS
app.use(express.json());

const PORT =  8000;

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => console.log(err));

app.use("/api/pins", pinRoute);
app.use("/api/users", userRoute);

app.listen(PORT, () => {
  console.log(`backend server is running on port ${PORT}`);
});