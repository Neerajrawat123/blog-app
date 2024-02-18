import { model, Schema } from "mongoose"
const commentSchema = new Schema({
    name:{
        type:String,
        required: true
    },
    postId:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        required: true
    },
    text:{
        type: String,
        required: true
    }
})

const Comment = model("comment", commentSchema)
export default Comment

