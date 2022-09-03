const express = require("express");
const router = express.Router();
const bookStorage = require("../bookStorage");

router.delete("/api/books/:id", (req, res) => {
  const { book } = bookStorage;
  const { id } = req.params;
  const idx = book.findIndex((el) => el.id === id);

  if (idx !== -1) {
    book.splice(idx, 1);
    res.json("ok");
  } else {
    res.status(404);
    res.json({ errcode: 404, errmsg: "404 | страница не найдена" });
  }
});

module.exports = router;
