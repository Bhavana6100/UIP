const express = require('express');
const Post = require('../models/post');
const router = express.Router();

router
.get('/getPost', async (req, res) => {
    try {
      let post = await Post.getPost(req.body.id,req.body.contentOfpost);
      res.send(post)
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })


  .post('/createPost', async (req, res) => {
    try {
      let post = await Post.createPost(req.body.id, req.body.contentOfpost);
      res.send(post)
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })
  


  .put('/updatePost', async (req, res) => {
    try {
      let post = await Post.updatePost(req.body.id, req.body.contentOfpost);
      res.send(post)
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })

  .post('/deletePost', async (req, res) => {
    try {
      await Post.deletePost(req.body.id);
      res.send({success: "Post Deleted Successfully... :)"})
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })

  
module.exports=router;