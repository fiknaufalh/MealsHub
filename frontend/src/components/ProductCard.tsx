import { useEffect, useState } from 'react'
import { useShoppingCart } from '../contexts/ShoppingCartContext';
import { useLocalStorage } from '../hooks/useLocalStorage';
import ShoppingCart from '../pages/ShoppingCart';
import Axios from "axios";

type ProductCardProps = {
    id: number;
    image: string;
    name: string;
    description: string;
    price: number;
    id_tenant: number;
}

interface Product {
    id: number;
    id_tenant: number;
}

export default function ProductCard({ data }: { data: ProductCardProps[] }) {
    const { getItemQuantity, increaseItemQuantity, removeItem, cartItems } = useShoppingCart();

    const productlist = data.map(({ id, image, name, description, price, id_tenant }) => {
        const [isAdded, setIsAdded] = useLocalStorage<boolean>(`product-${id}`, false);

        // find cartItem id_tenant

        const [productData, setProductData] = useState<Product[]>([]);

        const getProductData = async () => {
            const productResponse = await Axios.get("http://localhost:8000/products");

            const productData = productResponse.data.data;

            const result = productData.map((product: Product) => {
                return {
                    id: product.id,
                    id_tenant: product.id_tenant
                }
            });

            setProductData(result);

        };

        useEffect(() => {
            getProductData();
        }, []);

        console.log(productData);

        useEffect(() => {
            const quantity = getItemQuantity(id);
            setIsAdded(quantity > 0);
        }, [getItemQuantity, id, setIsAdded]);

        const handleClick = () => {
            if (cartItems.length > 0) {
                const cartItem = cartItems[0];
                const cartTenantId = cartItem && productData.find((product: Product) => product.id === cartItem.id)?.id_tenant;
                if (cartTenantId !== id_tenant) {
                    alert("You can't add items from different tenants to the cart!");
                    return;
                }
            }
            if (isAdded) {
                removeItem(id);
            } else {
                increaseItemQuantity(id);
            }
            setIsAdded(!isAdded);
        };

        const priceidr = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

        return (
            <div key={id} className="flex bg-white justify-center items-center border-t border-gray-300 py-10 md:flex-row mx-16">
                <div className="flex flex-row w-full leading-normal">
                    <div className="flex flex-col w-full">
                        <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 w-5/6">{name}</h5>
                        <p className="my-4 font-normal text-lg text-gray-700 w-5/6">{description}</p>
                        <p className="mt-4 font-normal text-lg text-gray-500 w-5/6">Rp {priceidr},00</p>
                    </div>
                    <div className="flex flex-col justify-center items-center w-1/4 full">
                        <div className="flex flex-row items-center h-36 w-36 rounded-3xl md:h-36 md:w-36 md:rounded-3xl mb-4">
                            <img src={image} alt={name} className='object-cover h-full w-full rounded-3xl'>
                            </img>
                        </div>
                        <div className="flex flex-row items-center">
                            <button
                                type="button"
                                className={`${isAdded ? 'text-mealshub-red hover:text-white border-2 border-mealshub-red hover:bg-mealshub-red' : 'text-white bg-mealshub-red hover:text-mealshub-red border-2 border-mealshub-red hover:bg-white'} font-bold text-lg rounded-full text-sm px-5 py-2.5 text-center`}
                                onClick={handleClick}
                            >
                                {isAdded ? "Added" : "Add to Cart"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    });

    return productlist;
}