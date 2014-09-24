var express           = require('express'),
    app               = express(),
    bodyParser        = require('body-parser'),
    mongoose          = require('mongoose'),
    studentsController = require('./server/controllers/students-controller');

mongoose.connect('mongodb://localhost:27017/mean-demo');

app.use(bodyParser());

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/client/views/index.html');
});

app.use('/js', express.static(__dirname + '/client/js'));

//REST API
app.get('/api/students', studentsController.list);
app.post('/api/students', studentsController.create);

app.listen(3000, function() {
  console.log('I\'m Listening on port 3000...');
});
