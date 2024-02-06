import Plant from '../models/Plant.js';
import Customer from '../models/Customer.js';

const getAllPlants = async (req, res) => {
    try {
        const plants = await Plant.findAll();
        res.status(200).json(plants);
    } catch (error) {
        console.error('Error fetching plants:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getAllCustomers = async (req, res) => {
    try {
        const customers = await Customer.findAll();
        res.status(200).json(customers);
    } catch (error) {
        console.log('Error fetching customers:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export { getAllPlants, getAllCustomers };
