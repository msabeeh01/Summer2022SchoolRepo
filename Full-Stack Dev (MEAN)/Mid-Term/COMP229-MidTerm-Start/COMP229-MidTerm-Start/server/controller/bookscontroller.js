let express = require('express');
const { isBuffer } = require('util');
let router = express.Router();

let Books = require('../models/books');

module.exports.displayAddPage = (req,res,next) =>{
    res.render('books/add', {title: 'Add Book'})
  }

module.exports.processAddPage = (req,res,next) =>{
    let newBook = Books({
        "Title": req.body.title,
        "Description": req.body.description,
        "Price":req.body.price,
        "Author":req.body.author,
        "Genre":req.body.genre
    });

    Books.create(newBook, (err, Books) =>{
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            res.redirect('/books');
        }
    })
}

module.exports.displayEditPage = (req, res, next) =>{
    let id = req.params.id;

    Books.findById(id, (err, bookToEdit) =>{
        if(err){
            console.log('hello');
            console.log(err);
            res.end('hello');
        }else{
            res.render('../views/books/details.ejs', {title: 'Edit Book', books: bookToEdit})
        }
    });
}

module.exports.processEditPage = (req,res,next) =>{
    let id = req.params.id;

    let updatedBook = Books({
        "_id": id,
        "Title": req.body.title,
        "Description": req.body.description,
        "Price":req.body.price,
        "Author":req.body.author,
        "Genre":req.body.genre
    });

    Books.updateOne({_id: id}, updatedBook, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            res.redirect('/books');
        }
    });
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    Books.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
             // refresh the book list
             res.redirect('/books');
        }
    });
}