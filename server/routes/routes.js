import express from 'express'
import {SignUpUser} from '../controller/user-controller'
const router = express.Router();

router.post('/signup', SignUpUser)

