// controller/ProductsController.ts
import { Request, Response } from "express";
import { Products } from "../model/Products";
import ProductsRepo from "../repository/ProductsRepo";

class ProductsController {
    async getAllProducts(req: Request, res: Response) {
        try {
            const products = await new ProductsRepo().getAllProducts();
            res.status(200).json({
                status: "Ok!",
                message: "Successfully fetched all products data!",
                data: products,
            });
        } catch (error) {
            res.status(500).json({
                status: "Internal Server Error!",
                message: "Internal Server Error!",
            });
        }
    }

    async getProductById(req: Request, res: Response) {
        try {
            const productId = parseInt(req.params.id);
            const product = await new ProductsRepo().getProductById(productId);
            res.status(200).json({
                status: "Ok!",
                message: "Successfully fetched product by id!",
                data: product,
            });
        } catch (error) {
            res.status(500).json({
                status: "Internal Server Error!",
                message: "Internal Server Error!",
            });
        }
    }

    async createProduct(req: Request, res: Response) {
        try {
            const newProduct = new Products({
                id: req.body.id,
                description: req.body.description,
                id_tenant: req.body.id_tenant,
                image: req.body.image,
                name: req.body.name,
                price: req.body.price,
                stock: req.body.stock,
            });

            await new ProductsRepo().createProduct(newProduct);

            res.status(201).json({
                status: "Created!",
                message: "Successfully created product!",
            });
        } catch (error: any) {
            console.log(error.message);
            res.status(500).json({
                status: "Internal Server Error!",
                message: "Internal Server Error!",
            });
        }
    }

    async createBatchProduct(req: Request, res: Response) {
        try {
            const products = req.body.products;
            const newProducts = products.map((product: any) => {
                return new Products({
                    id: product.id,
                    description: product.description,
                    id_tenant: product.id_tenant,
                    image: product.image,
                    name: product.name,
                    price: product.price,
                    stock: product.stock,
                });
            });

            const productRepo = await new ProductsRepo();

            newProducts.forEach((product: Products) => {
                productRepo.createProduct(product);
            });

            res.status(201).json({
                status: "Created!",
                message: "Successfully created products!",
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                status: "Internal Server Error!",
                message: "Internal Server Error!",
            });
        }
    }

    async updateProduct(req: Request, res: Response) {
        try {
            const productId = parseInt(req.params.id);
            const updatedProduct = new Products({
                id: productId,
                description: req.body.description,
                id_tenant: req.body.id_tenant,
                image: req.body.image,
                name: req.body.name,
                price: req.body.price,
                stock: req.body.stock,
            });

            await new ProductsRepo().updateProduct(updatedProduct);

            res.status(200).json({
                status: "Ok!",
                message: "Successfully updated product data!",
            });
        } catch (error) {
            res.status(500).json({
                status: "Internal Server Error!",
                message: "Internal Server Error!",
            });
        }
    }

    async deleteProduct(req: Request, res: Response) {
        try {
            const productId = parseInt(req.params.id);
            await new ProductsRepo().deleteProduct(productId);

            res.status(200).json({
                status: "Ok!",
                message: "Successfully deleted product!",
            });
        } catch (error) {
            res.status(500).json({
                status: "Internal Server Error!",
                message: "Internal Server Error!",
            });
        }
    }
}

export default new ProductsController();
