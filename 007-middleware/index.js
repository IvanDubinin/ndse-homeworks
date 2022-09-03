const express = require("express");

const getAllBooksRouter = require("./routes/getAllBooksRouter");
const getBookByIdRouter = require("./routes/getBookByIdRouter");
const createBookRouter = require("./routes/createBookRouter");
const userLoginRouter = require("./routes/userLoginRouter");
const updateBookByIdRouter = require("./routes/updateBookByIdRouter");
const deleteBookByIdRouter = require("./routes/deleteBookByIdRouter");
const getFileBookByIdRouter = require("./routes/getFileBookByIdRouter");

const app = express();
app.use(express.json());

app.use(getAllBooksRouter);
app.use(getBookByIdRouter);
app.use(createBookRouter);
app.use(userLoginRouter);
app.use(updateBookByIdRouter);
app.use(deleteBookByIdRouter);
app.use(getFileBookByIdRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT);
