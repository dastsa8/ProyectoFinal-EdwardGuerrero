
const mockProducts = [
    {
        id: 1,
        title: 'Producto 1',
        price: 100,
        category: 'electronics',
        description: 'Descripción 1',
        image: 'https://via.placeholder.com/150'
    },
    {
        id: 2,
        title: 'Producto 2',
        price: 200,
        category: 'clothing',
        description: 'Descripción 2',
        image: 'https://via.placeholder.com/150'
    }
];

export const mockAPI = {
    getById: (id) => new Promise(resolve => {
        setTimeout(() => {
            resolve(mockProducts.find(p => p.id === id));
        }, 500);
    }),
    getAll: () => new Promise(resolve => {
        setTimeout(() => resolve(mockProducts), 500);
    }),
    getByCategory: (category) => new Promise(resolve => {
        setTimeout(() => {
            resolve(mockProducts.filter(p => p.category === category));
        }, 500);
    })
};