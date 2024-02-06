import Plant from '../models/Plant.js';
import Customer from '../models/Customer.js';
import sequelize from '../sequelize-config.js';

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

const getCustomerByUsername = async (req, res) => {
    const query = 'SELECT * FROM CUSTOMERS WHERE TRIM(UPPER(username)) = TRIM(UPPER(:username))';
    try {
        const customers = await sequelize.query(query, {
            replacements: { username: req.params.username },
            type: sequelize.QueryTypes.SELECT,
        });

        if (customers.length === 0) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(customers);
    } catch (error) {
        console.log('Error fetching customers:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export { getAllPlants, getAllCustomers, getCustomerByUsername };
