const plantData = [
    { id: 0, name: 'Sunflower', price: 29.99, image: '/images/sunflower.png' },
    { id: 1, name: 'Carnation', price: 29.99, image: '/images/carnation.png' },
    { id: 2, name: 'Daffodil', price: 29.99, image: '/images/daffodil.png' },
    { id: 3, name: 'Lily', price: 29.99, image: '/images/lily.png' },
    { id: 4, name: 'Rose', price: 29.99, image: '/images/rose.png' },
    { id: 5, name: 'Tulip', price: 29.99, image: '/images/tulip.png' }
];

// GET /plants Request Handler
const getAllPlants = (req, res) => {
    res.status(200).json(plantData);
};

export { getAllPlants };
