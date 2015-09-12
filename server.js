var express = require ('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/contactList', function (req, res){

  var person1 = {
    name: 'Tim',
    email: 'tim@gmail.com',
    number: '(111) 111-1111'
  }

  var person2 = {
    name: 'Emily',
    email: 'emily@gmail.com',
    number: '(111) 222-2222'
  }

  var person3 = {
    name: 'John',
    email: 'john@gmail.com',
    number: '(111) 333-3333'
  }

  var contactList = [person1, person2, person3];
  res.json(contactList);

});

app.listen(3000);
