import express from 'express';
import { getAllPlants } from '../controllers/plant-api-controller.js';

const router = express.Router();

router.route('/plants')
    .get(getAllPlants);

export default router;