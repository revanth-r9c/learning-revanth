const Author = require("../models/authors");
const { validationResult } = require("express-validator");
const auth = require("../middlewares/auth");

exports.AuthorPost = async function(req, res, next) {
    const errors = validationResult(req);
    if(errors.isEmpty()){
        let {first_name, last_name, dob, dod} = req.body;
        let authorOb = new Author({first_name, last_name, dob, dod});
        let result = await authorOb.save();
        res.json(result);
    }
    else{
        res.send(errors);
    }
};

exports.AuthorGet = async function(req, res, next)  {
    let results = await Author.find();
    res.json(results);
};

exports.AuthorDelete = async function(req, res, next) {
    let idToDelete = req.params.id;
    let result = await Author.findByIdAndDelete(idToDelete);
    res.json(result);
};

exports.AuthorPut = async function (req, res, next) {
    let {first_name, last_name, dob, dod}= req.body;
    let ob={first_name, last_name, dob, dod};
    let result = await Author.findByIdAndUpdate(req.params.id, ob);
    res.json(result);
};


exports.getAuthors = [
    auth,
    async function(req, res, next){
        let results = await Author.find();
        res.json(results);
    },
];
