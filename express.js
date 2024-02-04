// express.js

import express from 'express';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import morgan from 'morgan';
import cors from 'cors';
import apiRouter from './routes/api-router.js';

// Adjust the import path for sequelize-config.js
import sequelize from './sequelize-config.js';

const app = express();

// Serve static files from the "public" directory
app.use(express.static('public'));
app.use('/images', express.static('images'));

// Express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(compression());
app.use(morgan('dev'));
app.use(cors());

// Sync the database
sequelize.sync().then(() => {
    console.log("Database Synchronized");
    app.listen(3004, () => {
        console.log('Server is running on port 3004');
    });
});

// Routing
app.get('/', (req, res) => {
    res.send('Node.js Server is live!');
});

// Default Path for the API
// Anything going to http://localhost:3004/v1/ will arrive here
app.use('/v1', apiRouter);

export default app;