const express = require('express');
const router = express.Router();

const Note = require('./../models/Note');

   router.post('/list',async function(req,res) {
    const responce = await Note.find({userId:req.body.userId});
    res.json(responce)
    });

  router.post('/add',async function(req,res) {
    await Note.deleteOne({id:req.body.id});
    const newNote = new Note({
      id:req.body.id,
      userId:req.body.userId,
      title:req.body.title,
      content:req.body.content
    });
    await newNote.save();
    const responce = {message:"new Node Created"+`id : ${req.body.id}`};
    res.json(responce);
    });

    router.post('/delete',async function(req,res){
      await Note.deleteOne({id:req.body.id});
      const responce = {message:"new Node Deleted"+`id : ${req.body.id}`};
      res.json(responce);
    });

    module.exports = router;