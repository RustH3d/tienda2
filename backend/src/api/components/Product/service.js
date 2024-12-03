const prisma = require('../../../config/prisma');

class ProductService {
    async getAll() {
        const products = await prisma.availableProducts.findMany({
            where: {
                deletedAt: {
                    not: null
                }
            },
            include: {
                products: {
                    include: {
                        categories: true,
                        Images: true,
                    }
                },
                providers: true,
            }
        });

        const formatter = products.map(product => {
            return {
                id: product.products.id,
                name: product.products.name,
                description: product.products.description,
                imageUrl: product.products.Images.url,
                quantity: product.quantity,
                categories: product.products.categories,
                provider: {
                    ...product.providers
                },
            }
        })

        return formatter;
    }

    async getUnique(id) {
        return {...category}
    }

    async create(data) {
        return {...data}
    }

    async update(data) {

    }

    async erase(id) {

    }
}

module.exports = ProductService;