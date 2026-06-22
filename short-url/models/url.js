const mongoose = require("mongoose");

const userScema = new mongoose.Schema(
  {
    shortId: {
      type: String,
      required: true,
      unique: true,
    },
    redirectURL: {
      type: String,
      required: true,
    },
    visitHistory: [{ timeStamp: { type: Number } }],
  },
  { timestamps: true },
);

const URL = mongoose.model("url", userScema);

module.exports = URL;
