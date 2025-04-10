import express from 'express';
import tweetRouter from './tweets.js';
import commentRouter from './comment.js';

const router = express.Router(); // Creates a new router

router.use('/tweets',tweetRouter);

router.use('/tweets/:id',tweetRouter);

router.use('/comments',commentRouter);

router.use('/comments/:id',commentRouter);

export default router; // Export the router object