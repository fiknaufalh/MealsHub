// ProductsRepo.ts
/* eslint-disable no-unused-vars */
import { Products } from "../model/Products";

interface IProductsRepo {
    getAllProducts(): Promise<Products[]>;
    getProductById(productId: number): Promise<Products>;
    createProduct(product: Products): Promise<void>;
    updateProduct(product: Products): Promise<void>;
    deleteProduct(productId: number): Promise<void>;
}

export default class ProductsRepo implements IProductsRepo {
    async getAllProducts(): Promise<Products[]> {
        try {
            return await Products.findAll();
        } catch (error: any) {
            throw new Error(`Error while fetching products: ${error.message}`);
        }
    }

    async getProductById(productId: number): Promise<Products> {
        try {
            const product = await Products.findOne({
                where: { id: productId },
            });
            if (!product) {
                throw new Error(`Product with id ${productId} not found`);
            }
            return product;
        } catch (error: any) {
            throw new Error(`Error while fetching product: ${error.message}`);
        }
    }

    async createProduct(product: Products): Promise<void> {
        try {
            await Products.create({
                id: product.id,
                description: product.description,
                id_tenant: product.id_tenant,
                image: product.image,
                name: product.name,
                price: product.price,
                stock: product.stock,
            });
        } catch (error: any) {
            throw new Error(`Error while creating product: ${error.message}`);
        }
    }

    async updateProduct(product: Products): Promise<void> {
        try {
            const existingProduct = await Products.findOne({
                where: { id: product.id },
            });
            if (!existingProduct) {
                throw new Error(`Product with id ${product.id} not found`);
            }

            existingProduct.description = product.description;
            existingProduct.id_tenant = product.id_tenant;
            existingProduct.image = product.image;
            existingProduct.name = product.name;
            existingProduct.price = product.price;
            existingProduct.stock = product.stock;

            await existingProduct.save();
        } catch (error: any) {
            throw new Error(`Error while updating product: ${error.message}`);
        }
    }

    async deleteProduct(productId: number): Promise<void> {
        try {
            const product = await Products.findOne({
                where: { id: productId },
            });
            if (!product) {
                throw new Error(`Product with id ${productId} not found`);
            }

            await product.destroy();
        } catch (error: any) {
            throw new Error(`Error while deleting product: ${error.message}`);
        }
    }
}
