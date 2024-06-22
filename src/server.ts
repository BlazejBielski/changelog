import express from "express";
import cors from 'cors';

import router from './router';
import {createNewUser} from "./handlers/user";
import {signin} from "./signin";


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', router)
app.post('/users', createNewUser)

app.post('/signin', signin)

export default app;
