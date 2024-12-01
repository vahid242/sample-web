var express = require("express");
const { engine } = require("express/lib/application");
var app     = express();

//Static Files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))


//Set views
app.set('views', './views')
app.set('view engine', 'ejs')

app.get('', (req, res) =>{
    res.render('main')
})

app.get('/message', (req, res) =>{
    res.render('message')
})

app.get('/election', (req, res) =>{
    res.render('election')
})

const port = process.env.PORT || 8000;
app.listen(port, () => console.info(`listening to port ${port}`))