import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    return res.json({
        message:'Welcome to the comment route v2'
    });
});

router.get('/:id', (req, res) => {
    res.json({
        message:'Welcome to the comment route v2',
        id:req.params.id
    });
});

export default router;