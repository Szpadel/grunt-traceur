var express = require('express');
var serveStatic = require('serve-static');

var app = express();

app.use(serveStatic(__dirname));

app.set('PORT', 3000);
app.listen(app.get('PORT'));
console.log('listening at port:', app.get('PORT'));