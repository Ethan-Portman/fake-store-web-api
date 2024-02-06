import express from 'express';
import { getAllPlants, getAllCustomers } from '../controllers/plant-api-controller.js';

const router = express.Router();

router.route('/plants')
    .get(getAllPlants);

router.route('/customers')
    .get(getAllCustomers);

export default router;