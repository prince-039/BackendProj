import express from 'express';

const router = express.Router(); // creates  Router Object

router.get('/', (req,res) => {
    return res.json({
        message: 'Welcome to the tweet route v2'
    });
});

router.get('/:id', (req, res) => {
    return res.json({
        message: 'Welcome to the tweet route v2',
        id:req.params.id
    });
});

router.post('/',(req, res) => {
    
})
export default router; // export the router Object


// localhost:3000/tweet GET