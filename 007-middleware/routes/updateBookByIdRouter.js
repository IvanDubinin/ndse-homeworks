const express = require("express");
const router = express.Router();
const bookStorage = require("../bookStorage");
const fileMulter = require("../middleware/file");

router.put("/api/books/:id", fileMulter.single("fileBook"), (req, res) => {
  const { book } = bookStorage;
  const { title, description, authors, favorite, fileCover, fileName } =
    req.body;
  const fileBook = req.file.originalname;
  const { id } = req.params;
  const idx = book.findIndex((el) => el.id === id);

  if (idx !== -1) {
    book[idx] = {
      ...book[idx],
      title,
      description,
      authors,
      favorite,
      fileCover,
      fileName,
      fileBook,
    };

    res.json(book[idx]);
  } else {
    res.status(404);
    res.json({ errcode: 404, errmsg: "404 | страница не найдена" });
  }
});

module.exports = router;
