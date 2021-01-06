const express = require('express');
const app = express();
const nav =[
    {
        link:'/books',name:'Books'
    },
    {
        link:'/authors',name:'Authors'
    },
    {
        link:'/login',name:'Login'
    },
    {
        link:'/signup',name:'Signup'
    },
    {
        link:'/addbook',name:'Add Book'
    },
    {
        link:'/addauthor',name:'Add Author'
    }
]
const booksRouter = require('./src/routes/bookRoutes')(nav);
const authorsRouter = require('./src/routes/authorRoutes')(nav);
const loginRouter = require('./src/routes/loginRoutes')(nav);
const signupRouter = require('./src/routes/signupRoutes')(nav);
const addbookRouter = require('./src/routes/addbookRoutes')(nav);
const addauthorRouter = require('./src/routes/addauthorRoutes')(nav);

app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/login',loginRouter);
app.use('/signup',signupRouter);
app.use('/addbook',addbookRouter);
app.use('/addauthor',addauthorRouter);

app.get('/',function(req,res){
    res.render("index",
    {
        nav,
        title:'Library'
    });
});

app.listen(5000);