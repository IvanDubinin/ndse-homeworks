const express = require("express");
const router = express.Router();
const bookStorage = require("../bookStorage");

router.get("/api/books", (req, res) => {
  const { book } = bookStorage;
  console.log(book);
  res.json(book);
});

module.exports = router;
