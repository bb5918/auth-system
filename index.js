const express = require("express");
const mongoose = require("mongoose");

const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const authRoutes = require("./routes/auth");
const verifyToken = require("./routes/verifyToken");

app.get("/", (req, res) => {
  res.send("Welcome to the auth system");
});

app.use("/users", authRoutes);
app.use("/temp", require("./routes/temp"));

mongoose
  .connect(
    "mongodb+srv://BB5918:asdf1234@cluster0.9nx2f.mongodb.net/authsystem?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    app.listen(3000, () => console.log("Server is running"));
  })
  .catch((err) => console.log(err));
