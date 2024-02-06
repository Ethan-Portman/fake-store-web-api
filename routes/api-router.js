import express from 'express';
import { getAllPlants, getAllCustomers, getCustomerByUsername } from '../controllers/plant-api-controller.js';

const router = express.Router();

router.route('/plants')
    .get(getAllPlants);

router.route('/customers')
    .get(getAllCustomers);


router.route('/customers/:username')
    .get(getCustomerByUsername);

export default router;