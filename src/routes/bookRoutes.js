const express = require('express');
const booksRouter = express.Router();
function router(nav){
    var books = [
        {
            title : 'Tom and Jerry',
            author : 'Joseph Barbera',
            genre : 'Cartoon',
            img : "tom.png"
        },
        {
            title : 'Life of Pi',
            author : 'Yann Martel',
            genre : 'Action and Adventure',
            img : "lifeofpi.jpg"
        },
        {
            title : 'Beloved',
            author : 'Toni Morrison',
            genre : 'Classic',
            img : "beloved.jpg"
        },
        {
            title : 'The adventures of Sherlock Holmes',
            author : 'Sir. Arthur Conan Doyle',
            genre : 'Detective and Mystery',
            img : "sherlockholmes.jpg"
        },
        {
            title : 'Bird Box',
            author : 'Josh Malerman',
            genre : 'Horror',
            img : "birdbox.jpg"
        }
    ]
    
    booksRouter.get('/',function(req,res){
        res.render("books",{
            nav,
            books
        });
    });
    
    booksRouter.get('/:id',function(req,res){
        const id = req.params.id;
        res.render('book',{
            nav,
            book : books[id]
        });
    });
    return booksRouter;
}


module.exports = router;