import Comment from "../model/comment.js";

export const getAllComments = async (req, res) => {
    const {id} = req.params;
    console.log('error hear')

    try {
        const comments = await Comment.find({postId:id})
        res.status(200).json(comments)
    } catch (error) {
      res.status(500).json(error)
        
    }
  
};

export const postComment = async (req, res) => {
console.log('erore at postcommet')

    try {
      const createdComment = new Comment(req.body);
      await createdComment.save();
  
      res.status(200).json({createdComment});
    } catch (error) {
      res.status(500).json(error)
    }
}

export const deleteComment = async (req, res) => {
  const {id} = req.params;


  try {
  const comment = await Comment.findByIdAndDelete(id)
  res.status(200).json(comment)
    
  } catch (error) {
    res.status(500).json(error)
  }
}