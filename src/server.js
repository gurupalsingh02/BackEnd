const express = require('express');
const app = express();
const Note = require('./models/Note');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
const mongoDbPath = 'mongodb+srv://gurupalsingh83:1234@cluster0.8gnitjr.mongodb.net/notesdb';
mongoose.connect (mongoDbPath).then(() =>{

  app.get('/',function(req,res){
    const responce ={statuscode:res.statusCode,message:'API works'};
  res.json(responce);
  });

  const noteRouter = require('./routes/Note');

  app.use('/notes',noteRouter);

  });
const PORT = process.env.PORT||5000;
 app.listen(PORT, function(){
  console.log('server is running on port '+PORT);
 });