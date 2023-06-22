// 1. import mongoose
const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
    contentOfpost: {type: String, unique: true},
    commentsForpost:{ type: String}
  })
  // 3. create model of schema 
const Post = mongoose.model("post", postSchema);

// 4. create CRUD functions on model
//CREATE a post
async function createPost( id,contentOfpost){
  

  const newPost=await Post.create({
    userID: id, 
    contentOfpost: contentOfpost
  });
  return newPost;

}
async function updatePost(id,contentOfpost){
  const post = await Post.updateOne({"_id": id}, {$set: { contentOfpost: contentOfpost}});
  return post;

}

async function deletePost(id){
  await Post.findOneAndDelete({"_id": id});
}

async function getPost(id) {
  return await Post.findOne({"_id": id});
  
}


module.exports = {createPost,updatePost, deletePost, getPost};