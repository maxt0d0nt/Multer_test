const express = require('express');
const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/images'),
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const app = express();

//middelware
app.use(multer({
    storage: storage,
    dest:  path.join(__dirname, 'public/images')  
}).single('imagen'));


//Routes
app.get('/', (req, res) => {
    res.render('index');
});

app.post('/image', (req, res) => {
   console.log(req.file);
    res.send('uploaded');
});

//settings
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

//start server
app.listen(app.get('port'), () =>{
    console.log(`Server on port ${app.get('port')}`);

})
