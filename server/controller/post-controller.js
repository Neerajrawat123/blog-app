import Post from '../model/post.js'
export const createPost = async (req,res) =>{
    try {
        const post = new Post(req.body)
        post.save()
        res.status(200).json('Post saved succesfully')

    } catch (error) {
        res.status(500).json(error);
    }
}

export const getAllPosts = async (req, res) =>{
    let username = req.query.username;
    let category = req.query.category;
    let posts;
    try {
        if(username) 
            posts = await Post.find({ username: username });
        else if (category) 
            posts = await Post.find({ categories: category });
        else 
            posts = await Post.find({});
            
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json(error)
    }

}