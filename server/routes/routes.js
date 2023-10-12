import express from 'express'
import { SignUpUser, loginUser} from '../controller/user-controller.js'
import { createPost, getAllPosts} from '../controller/post-controller.js'

const router = express.Router();

router.post('/sign-up', SignUpUser)
router.post('/login',loginUser)
router.post('/create',createPost)
router.get('/posts',getAllPosts)

export default router

