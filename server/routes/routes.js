import express from 'express'
import { SignUpUser, loginUser} from '../controller/user-controller.js'
import { createPost, getAllPosts, updatePost, getPost, deletePost, } from '../controller/post-controller.js'
import { authenticateToken } from '../middleware/auth.middleware.js';
import { getAllComments, postComment,deleteComment } from '../controller/comments.controller.js';

const router = express.Router();

router.post('/sign-up', SignUpUser)
router.post('/login',loginUser)
router.post('/create', authenticateToken,createPost)
router.get('/posts',getAllPosts)
router.get('/post/:id', authenticateToken, getPost)
router.put('/update/:id',authenticateToken, updatePost)
router.delete('/delete/:id', deletePost),
router.get('/comments/:id', authenticateToken, getAllComments),
router.post('/post/comment', authenticateToken, postComment),
router.delete('/delete/comment/:id', authenticateToken, deleteComment)



export default router

