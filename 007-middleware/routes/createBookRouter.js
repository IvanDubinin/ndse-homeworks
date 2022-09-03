const express = require("express");
const router = express.Router();
const bookStorage = require("../bookStorage");
const fileMulter = require("../middleware/file");
const { v4: uuid } = require("uuid");

class Book {
  constructor(
    title = "",
    description = "",
    authors = "",
    favorite = "",
    fileCover = "",
    fileName = "",
    fileBook = "",
    id = uuid()
  ) {
    this.title = title;
    this.description = description;
    this.authors = authors;
    this.favorite = favorite;
    this.fileCover = fileCover;
    this.fileName = fileName;
    this.fileBook = fileBook;
    this.id = id;
  }
}

router.post("/api/books", fileMulter.single("fileBook"), (req, res) => {
  const { book } = bookStorage;

  const { title, description, authors, favorite, fileCover, fileName } =
    req.body;
  const fileBook = req.file.originalname;

  const newBook = new Book(
    title,
    description,
    authors,
    favorite,
    fileCover,
    fileName,
    fileBook
  );
  book.push(newBook);

  res.status(201);
  res.json(newBook);
});

module.exports = router;
