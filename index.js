var express = require('express'),
client_track = require('client_track');
app = express();

app.set('port', (process.env.PORT || 8080));

app.use(express.static(__dirname + '/public'));

// Setting de views
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.get('/', function(req, res){
  client_track.reqlog(req);
  res.render('index')
});

app.listen(app.get('port'), function(){
  console.log('Node corriendo en el puerto', app.get('port'));
});
