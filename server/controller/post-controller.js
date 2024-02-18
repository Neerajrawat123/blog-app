import Post from "../model/post.js";
export const createPost = async (req, res) => {
  try {
    const post = new Post(req.body);
    post.save();
    res.status(200).json("Post saved succesfully");
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getAllPosts = async (req, res) => {
  let username = req.query.username;
  let category = req.query.category;
  let posts;
  try {
    if (username) posts = await Post.find({ username: username });
    else if (category) posts = await Post.find({ categories: category });
    else posts = await Post.find({});

    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updatePost = async (req, res) => {
  const post = req.body;
  try {
    if (!post._id) {
      res.status(400).json({ msg: "post doesnt exist" });
    }
    const updatedPost = await Post.findByIdAndUpdate(post._id, { $set: post });
    res.status(200).json({ msg: "post updated succesfully" });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const deletedPost = await Post.findByIdAndDelete(id);

    res.status(200).json({ msg: "delete post succesfully" });
  } catch (error) {
    console.log(error);
  }
};

export const getPost = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findById(id);
    res.status(200).json(post)
  } catch (error) {
    console.log(error);
  }
};

