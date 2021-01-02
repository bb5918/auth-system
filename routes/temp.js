const express = require("express");
const router = express.Router();
const { Temp } = require("../models/Temp");

router.post("/uploadSomething", (req, res) => {
  const temp = new Temp(req.body);

  temp.save((err) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({ success: true });
  });
});

module.exports = router;
