import express from 'express';
import morgan from 'morgan';
import { PORT } from './config/serverConfig.js';
import apiRouter from './routes/apiRoutes.js';
// Create a new express app/server object
const app = express();
app.use(morgan('combined'));

app.use(express.json());
app.use(express.urlencoded());
app.use(express.text());

app.use('/api', apiRouter); // if the request url starts with /api, use the apiRouter
app.get('/', (req, res) => {
    res.render('./views/index');
});

app.get('/ping', (req,res) => {
    return res.json({
        message:'pong'
    });
}); // what to do if someone makes a GET request to /ping


// app.all('*', (req, res) => {
//     return res.status(404).json({
//         message: 'NOT FOUND'
//     });
// });

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});