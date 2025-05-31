const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const pinRoute = require("./routes/pins");
const userRoute = require("./routes/users");
const chatRoute = require("./chatbot"); // ✅ Import chatbot route

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 8000;

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => console.log(err));

// Existing routes
app.use("/api/pins", pinRoute);
app.use("/api/users", userRoute);

// ✅ Add chatbot route
app.use("/api", chatRoute); // So /api/chat will be handled

app.listen(PORT, () => {
  console.log(`backend server is running on port ${PORT}`);
});
