import express from 'express';
import { connection } from './database/db.js'

const app = express()

const port = 5000
connection()

app.listen(port, () => console.log('server is running in on port 4000'))