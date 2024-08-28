const Book = require("../models/books");

exports.createBook = async function (req, res, next) {
  try {
    const { title, author, summary, isbn, category } = req.body;
    const bookOb = new Book({
      title,
      author,
      summary,
      isbn,
      category,
    });

    await bookOb.save();
    res.json("Book created");
  } catch (err) {
    res.status(500).send("Unable to create book");
  }
};

exports.getBooksWithAuthors = async function (req, res) {
  try {
    const books_list = await Book.find()
      .populate("author")
      .populate("category")
      .exec();

    res.json(books_list);
  } catch (err) {
    res.status(500).json({ status: "error" });
  }
};
