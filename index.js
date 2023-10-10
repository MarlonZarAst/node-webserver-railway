import * as url from 'url';

import 'dotenv/config'

import express from 'express';
import hbs from 'hbs';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));


const port = process.env.PORT;
const app = express();

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home',{
        nombre:'Marlon Zarate',
        titulo: 'Curso de Node'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic',{
        nombre:'Marlon Zarate',
        titulo: 'Curso de Node'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements',{
        nombre:'Marlon Zarate',
        titulo: 'Curso de Node'
    });
});


app.get('/hola-mundo', (req, res) => {
    res.send('Hello, world desde su ruta');
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });