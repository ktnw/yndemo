const express = require('express');
const path = require('path');
const routes = require('./routes');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);


app.use('*',function(req, res){
  res.status(404).send('Page Not Found!');
});

const PORT = process.env.PORT || 8000

app.listen(PORT, function() {
  console.log('listening on ' + PORT)
})

module.exports = app;