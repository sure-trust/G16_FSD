import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';
import { PORT } from './PORT.js';

const app = express();

app.use('/posts',postRoutes);

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://jsmasterer:jsmasterer1234@cluster0.8yyacnc.mongodb.net/';
const PORT = process.env.PORT || 5000;
mongoose.connect(CONNECTION_URL, {useNewUrlParser:true, useUnifiedTopology:true}).then(()=>app.listen(PORT,() => console.log(`Server Running on Port: http://localhost:${PORT}`))).catch((error) => console.log(error.message));
//-----`${error} is not connected`
// https://www.mongodb.com/cloud/atlas

mongoose.set('useFindAnd Modify', false);