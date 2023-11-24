"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Products_1 = require("../model/Products");
const ProductsRepo_1 = __importDefault(require("../repository/ProductsRepo"));
class ProductsController {
    getAllProducts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const products = yield new ProductsRepo_1.default().getAllProducts();
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully fetched all products data!",
                    data: products,
                });
            }
            catch (error) {
                res.status(500).json({
                    status: "Internal Server Error!",
                    message: "Internal Server Error!",
                });
            }
        });
    }
    getProductById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const productId = parseInt(req.params.id);
                const product = yield new ProductsRepo_1.default().getProductById(productId);
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully fetched product by id!",
                    data: product,
                });
            }
            catch (error) {
                res.status(500).json({
                    status: "Internal Server Error!",
                    message: "Internal Server Error!",
                });
            }
        });
    }
    createProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newProduct = new Products_1.Products({
                    id: req.body.id,
                    description: req.body.description,
                    id_tenant: req.body.id_tenant,
                    image: req.body.image,
                    name: req.body.name,
                    price: req.body.price,
                    stock: req.body.stock,
                });
                yield new ProductsRepo_1.default().createProduct(newProduct);
                res.status(201).json({
                    status: "Created!",
                    message: "Successfully created product!",
                });
            }
            catch (error) {
                console.log(error.message);
                res.status(500).json({
                    status: "Internal Server Error!",
                    message: "Internal Server Error!",
                });
            }
        });
    }
    createBatchProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const products = req.body.products;
                const newProducts = products.map((product) => {
                    return new Products_1.Products({
                        id: product.id,
                        description: product.description,
                        id_tenant: product.id_tenant,
                        image: product.image,
                        name: product.name,
                        price: product.price,
                        stock: product.stock,
                    });
                });
                const productRepo = yield new ProductsRepo_1.default();
                newProducts.forEach((product) => {
                    productRepo.createProduct(product);
                });
                res.status(201).json({
                    status: "Created!",
                    message: "Successfully created products!",
                });
            }
            catch (error) {
                console.log(error);
                res.status(500).json({
                    status: "Internal Server Error!",
                    message: "Internal Server Error!",
                });
            }
        });
    }
    updateProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const productId = parseInt(req.params.id);
                const updatedProduct = new Products_1.Products({
                    id: productId,
                    description: req.body.description,
                    id_tenant: req.body.id_tenant,
                    image: req.body.image,
                    name: req.body.name,
                    price: req.body.price,
                    stock: req.body.stock,
                });
                yield new ProductsRepo_1.default().updateProduct(updatedProduct);
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully updated product data!",
                });
            }
            catch (error) {
                res.status(500).json({
                    status: "Internal Server Error!",
                    message: "Internal Server Error!",
                });
            }
        });
    }
    deleteProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const productId = parseInt(req.params.id);
                yield new ProductsRepo_1.default().deleteProduct(productId);
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully deleted product!",
                });
            }
            catch (error) {
                res.status(500).json({
                    status: "Internal Server Error!",
                    message: "Internal Server Error!",
                });
            }
        });
    }
}
exports.default = new ProductsController();
