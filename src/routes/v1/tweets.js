import express from 'express';
import { createTweet, getTweetsById, getTweets } from '../../controllers/tweetController.js';

const router = express.Router(); // creates  Router Object

router.get('/', getTweets);

router.get('/:id', getTweetsById);

router.post('/',createTweet);

export default router; // export the router Object


// localhost:3000/tweet GET