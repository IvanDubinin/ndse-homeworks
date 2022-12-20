const express = require("express");
const fileMulter = require("../middleware/file");
const axios = require("axios");
const router = express.Router();
const Book = require("../models/book");

class Book {
  constructor(
    title = "",
    description = "",
    authors = "",
    favorite = "",
    fileCover = "",
    fileName = "",
    fileBook = "",
    id = "",
  ) {
    this.title = title;
    this.description = description;
    this.authors = authors;
    this.favorite = favorite;
    this.fileCover = fileCover;
    this.fileName = fileName;
    this.fileBook = fileBook;
    this.id = this.title + "-" + this.description;
  }
}

router.get("/", async (req, res) => {
  try {
      const book = await Book.find().select('-__v');
      res.render("books/index", {
        title: "Books",
        books: book,
      });
  } catch(err) {
      res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
      const book = await Book.findById(id).select('-__v');
      axios.get(`http://counter:3001/counter/:${id}`)
      .then(response => {
        res.render("books/view", {
          title: "Book view",
          books: book[idx],
          views: response
        });
      })
      axios.post(`http://counter:3001/counter/:${id}/incr`)
      .then(response => {
      response.status(200).json({status: ok})
    })
  } catch(err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  const { title, description, authors, favorite, fileCover, fileName, fileBook } = req.body;

  const newBook = new Book ({
    title,
    description,
    authors,
    favorite,
    fileCover,
    fileName,
    fileBook
  })
  try {
      await newBook.save();
      res.json(newBook);
      res.redirect("/api/books");
  } catch(err) {
    res.status(500).json(err);
  }
});

router.put("/:id", fileMulter.single("fileBook"), async (req, res) => {
  const { id } = req.params;
  const { title, description, authors, favorite, fileCover, fileName } = req.body;
  const fileBook = req.file.path;
    try {
        await Book.findByIdAndUpdate(id, { title, description, authors, favorite, fileCover, fileName, fileBook })
        res.redirect(`/api/books/${id}`)
    } catch(err) {
      res.status(500).json(err);
  }
});


router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
      await Book.deleteOne({_id: id})
      res.json(true)
  } catch(err) {
    res.status(500).json(err);
    }
});

module.exports = router;