const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');
const homeRoutes = require('./routes/home');

const app = express();

const hbs = handlebars.create({
    defaultLayout: 'main',
    extname: 'hbs'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}));

app.use('/', homeRoutes);

const PORT = process.env.PORT || 3000;

async function start() {
    try {      
      app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
      })
    } catch (e) {
      console.log(e);
    }
  }
  
  start();