export const getComments =  (req, res) => {
   return res.json({
    message:'Welcome to comment route'
   });
}

export const getCommentsById = (req, res) => {
    return res.json({
        message:'Welcome to comment route',
        id: req.id.param
    });
}