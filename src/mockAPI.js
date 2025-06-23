const mockProducts = [
    // Electroonica
    {
        id: 1,
        title: "Smartphone Premium",
        price: 799.99,
        description: "Último modelo con cámara triple 108 MP (gran angular, ultra‑gran angular y telefoto), procesador Snapdragon 8 Gen 2, pantalla AMOLED 6.7” 120 Hz y carga inalámbrica 30 W.",
        category: "electronics",
        image: "https://plus.unsplash.com/premium_photo-1680985551009-05107cd2752c?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // mockup limpio
    },
    {
        id: 2,
        title: "Laptop Ultrabook 14”",
        price: 1299.99,
        description: "Chasis metálico de 1.25 kg, pantalla 2.8K táctil, Intel i7 13ª gen, 16 GB RAM LPDDR5, SSD 1 TB y autonomía de 18 h.",
        category: "electronics",
        image: "https://plus.unsplash.com/premium_photo-1681566925827-d1969127dd3d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 3,
        title: "Reloj Inteligente Deportivo",
        price: 249.99,
        description: "Pantalla AMOLED 1.4”, GPS/GNSS, monitor VO2 máx, 24‑7 HR, resistencia 5 ATM y baterías hasta 2 semanas.",
        category: "electronics",
        image: "https://images.unsplash.com/photo-1557438159-51eec7a6c9e8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // placeholder proporción
    },
    {
        id: 4,
        title: "Auriculares Bluetooth ANC",
        price: 159.99,
        description: "Cancelación activa de ruido, drivers de 40 mm, autonomía 40 h, estuche USB‑C (pueden cargarse al vuelo).",
        category: "electronics",
        image: "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    // Ropa Masculina 
    {
        id: 5,
        title: "Camisa de Lino Premium",
        price: 44.99,
        description: "100 % lino lavado, corte regular fit, ideal para verano, botones de madera y varios colores pastel.",
        category: "men's clothing",
        image: "https://plus.unsplash.com/premium_photo-1725075088693-1c51b6084294?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 6,
        title: "Jeans Slim Fit",
        price: 54.99,
        description: "Mezcla algodón‑spandex premium, corte slim, bolsillos reforzados y lavado oscuro repelente al agua.",
        category: "men's clothing",
        image: "https://plus.unsplash.com/premium_photo-1689629728966-0d248b5aeda2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 7,
        title: "Chaqueta de Cuero Clásica",
        price: 199.99,
        description: "Cuero bovino genuino, forro interior térmico, cremalleras YKK y ideal para motos o estilo urbano.",
        category: "men's clothing",
        image: "https://images.unsplash.com/photo-1511287080534-fe9d6cd10e68?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 8,
        title: "Zapatos Formales de Piel",
        price: 89.99,
        description: "Piel vacuno suave, plantilla acolchada, suela de goma antideslizante y diseño Oxford atemporal.",
        category: "men's clothing",
        image: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?q=80&w=1131&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },

    // Ropa Femenina
    {
        id: 11,
        title: "Vestido Elegante Midi",
        price: 59.99,
        description: "Tejido viscosa fluida, corte midi, estampado de puntos, lateral con fruncido que estiliza la figura.",
        category: "women's clothing",
        image: "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 12,
        title: "Blusa de Seda Natural",
        price: 45.99,
        description: "100 % seda, tacto suave y satinado, botones forrados y combinación de colores neutros y diseño de flores, fieles al campo.",
        category: "women's clothing",
        image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 13,
        title: "Falda Lápiz Elástica",
        price: 39.99,
        description: "Tejido con 5 % elastano, ajuste ceñido, cremallera invisible trasera y largo a la rodilla.",
        category: "women's clothing",
        image: "https://images.unsplash.com/photo-1577900232427-18219b9166a0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 14,
        title: "Abrigo Invernal Parka",
        price: 129.99,
        description: "Aislamiento térmico, capucha desmontable, forro polar interior y tejido repelente al agua.",
        category: "women's clothing",
        image: "https://plus.unsplash.com/premium_photo-1708110919472-b814343089fd?q=80&w=1270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },

    // Joyerria
    {
        id: 15,
        title: "Collar de Plata",
        price: 89.99,
        description: "Plata 925, color plateado y dorado, cierre de seguridad y diseño elegante para diario.",
        category: "jewelery",
        image: "https://plus.unsplash.com/premium_photo-1708711288213-1726e476ce74?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 16,
        title: "Anillo de Diamante Oro Blanco",
        price: 499.99,
        description: "Oro blanco 18 k, diamante central 0.5 ct Claro VS, talla clásica de tres garras.",
        category: "jewelery",
        image: "https://images.unsplash.com/photo-1589207212797-cfd546dea0fe?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Ds"
    },
    {
        id: 17,
        title: "Pendientes de Perla Cultivada",
        price: 69.99,
        description: "Perlas AKOYA 8‑9 mm, montura de plata 925, cierre catalán y diseño atemporal.",
        category: "jewelery",
        image: "https://images.unsplash.com/photo-1629224316810-9d8805b95e76?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 18,
        title: "Pulsera de Eslabones Oro 14k",
        price: 59.99,
        description: "Oro amarillo 14 k, eslabones planos, cierre de mosquetón y longitud ajustable.",
        category: "jewelery",
        image: "https://images.unsplash.com/photo-1655707063513-a08dad26440e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
];

const simulateDelay = () => new Promise(resolve => setTimeout(resolve, 500));

export const mockAPI = {
    getById: async (id) => {
        await simulateDelay();
        return mockProducts.find(p => p.id === id);
    },

    getAll: async () => {
        await simulateDelay();
        return mockProducts;
    },

    getByCategory: async (category) => {
        await simulateDelay();
        return mockProducts.filter(p => p.category === category);
    },

    getCategories: async () => {
        await simulateDelay();
        return [...new Set(mockProducts.map(p => p.category))];
    }
};