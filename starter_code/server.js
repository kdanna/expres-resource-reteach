'use strict'
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

var nextId = 1;

var candies = [
  {
    "id": 1,
    "name": "Chewing Gum",
    "color": "Red"
  },
  {
    "id": 2,
    "name": "Pez",
    "color": "Green"
  },
  {
    "id": 3,
    "name": "Marshmallow",
    "color": "Pink"
  }
];

//WORKS - "Candies Show Route" - client is requesting information on the whole candies object
app.get('/candies', function(req, res){
    res.send(candies);
});

//WORKS - "Candies Index Route". Will iterate through the whole candies array and if the index has an id that was asked for via search params, then it will respond with that object of candies.
app.get('/candies/:id', function(req, res){
  var foundCandy;
  var targetId = parseInt(req.params.id);
    for(var i = 0; i<candies.length; i++){
      if(candies[i].id === targetId){
        foundCandy = candies[i];
      }
    }
    res.send(foundCandy);
});


//WORKS - "Candies Create Route Id included" - will post a new candy to the array by pushing it with an id it assigns next in order.
app.post('/candies/:id', function(req, res){
  var newCandy = req.params.body;
  if(newCandy.id === undefinded){
    newCandy.id = nextId;
    nextId++;
  }
  candies.push(newCandy);
  res.send(newCandy);
});



//WORKS - "Candies Create Route ID not Included" - will post a new candy to the object w/o id.
app.post('/candies', function(req, res){
    res.send(candies);
});

//  "delete route"
app.delete('/candies/:id', function(req, res){

});

//Might be working - "Candies Update Route" I don't see the id show up in Postman, but i do see the color red
app.put('/candies/:id', function(req, res) {
  var candyUpdate = req.body
  res.send(candyUpdate);

});



app.listen(3000)
console.log("Server listening on port 3000")