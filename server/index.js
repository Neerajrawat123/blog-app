import express from 'express';
import { connection } from './database/db.js'
import Router from './routes/routes.js'
import cors from 'cors'
import bodyParser from  'body-parser'

const app = express();

const port = 8000;
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/',Router);
connection();

app.listen(port, () => console.log('server is running in on port 8000'));