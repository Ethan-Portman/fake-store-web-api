import Plant from '../models/Plant.js';

const getAllPlants = async (req, res) => {
    try {
        const plants = await Plant.findAll();
        res.status(200).json(plants);
    } catch (error) {
        console.error('Error fetching plants:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// GET /plants Request Handler
// const getAllPlants = (req, res) => {
//     res.status(200).json(plantData);
// };

export { getAllPlants };
