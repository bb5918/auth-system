const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tempSchema = mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
});

const Temp = mongoose.model("Temp", tempSchema);
module.exports = { Temp };
