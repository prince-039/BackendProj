import express from 'express';
import tweetRouter from './comment.js';
import commentRouter from './tweets.js';

const router = express.Router();// Create a new router object

router.use('/tweet', tweetRouter);

router.use('/comments',commentRouter);


export default router;