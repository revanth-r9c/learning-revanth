var express = require("express");
var router = express.Router();
const { body} = require("express-validator");
const { AuthorDelete, AuthorPut, AuthorPost, AuthorGet, getAuthors } = require("../controllers/authors");

router.post("/", [
    body("first_name").isLength({min:3}).withMessage("Min Length should be 3"),
    body("last_name").isLength({max:20}).withMessage("max length can't exceed 20 characters"),
    AuthorPost,
]);

router.get("/", getAuthors);

router.delete("/:id", AuthorDelete);

router.put("/:id", AuthorPut);

module.exports = router;



