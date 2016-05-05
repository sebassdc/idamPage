var express = require('express'),
app = express();


// Mi codigo

app.set('port', (process.env.PORT || 8080));
app.use(express.static(__dirname + '/public'));
app.listen(app.get('port'), function(){
  console.log('Node corriendo en el puerto', app.get('port'));
});
