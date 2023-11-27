import { useEffect, useState } from 'react'
import { useShoppingCart } from '../contexts/ShoppingCartContext';
import { useLocalStorage } from '../hooks/useLocalStorage';
import Axios from 'axios';

type cartItem = {
    id: number;
    quantity: number;
}

type ProductCardProps = {
    id: number;
    image: string;
    name: string;
    description: string;
    price: number;
    id_tenant: number;
}

interface Product {
    id : number,
    image: string,
    name: string,
    description: string,
    price: number
    id_tenant: number
}

interface Tenant {
    id : number,
    image: string,
    name: string
}

export default function ProductCard({ data }: { data: ProductCardProps[] }) {
    const { getItemQuantity, increaseItemQuantity, removeItem, cartItems } = useShoppingCart();
    const [tenantData, setTenantData] = useLocalStorage<Tenant[]>(`tenant`, []);

    const getTenantData = async () => {
        const tenantResponse = await Axios.get(`http://localhost:8000/tenants`);

        const tenantData = tenantResponse.data.data;

        const result = tenantData.map((tenant: Tenant) => {
            return {
                id: tenant.id,
                image: tenant.image,
                name: tenant.name
            }
        });

        setTenantData(result);

    };

    useEffect(() => {
        getTenantData();
    }, []);

    console.log(tenantData);

    const [productData, setProductData] = useLocalStorage<Product[]>(`product`, []);

    const getProductData = async () => {
        const productResponse = await Axios.get("http://localhost:8000/products");

        const productData = productResponse.data.data;

        const result = productData.map((product: Product) => {
            return {
                id: product.id,
                image: product.image,
                name: product.name,
                description: product.description,
                price: product.price,
                id_tenant: product.id_tenant
            }
        });

        setProductData(result);

    };

    useEffect(() => {
        getProductData();
    }, []);

    console.log(productData);

    const getTenantId = (cartItem: cartItem) => {
        const item = productData.find((i) => i.id === cartItem.id);
        const tenant = tenantData.find((t) => t.id === item?.id_tenant);
        console.log(tenant);
        return tenant?.id || 0;
    }

    const [productStates, setProductStates] = useLocalStorage<{ [key: number]: { isAdded: boolean, quantity: number } }>(`product`, {});
    const getQuantityAndIsAdded = (id: number) => {
        const quantity = getItemQuantity(id);
        const isAdded = productStates[id] ? productStates[id].isAdded : quantity > 0;
        return { quantity, isAdded };
    };

    const handleClick = (id: number, id_tenant: number) => {
        const { quantity } = getQuantityAndIsAdded(id);


        if (cartItems.length > 0 && getTenantId(cartItems[0]) !== id_tenant) {
            alert("You can only order from one tenant at a time!");
        } else {
            if (quantity > 0) {
                removeItem(id);
            } else {
                increaseItemQuantity(id);
            }

            setProductStates(prevState => ({
                ...prevState,
                [id]: { ...prevState[id], isAdded: !prevState[id]?.isAdded, quantity: getItemQuantity(id) }
            }));
        }
    };

    const productlist = data.map(({ id, image, name, description, price, id_tenant }) => {
        const { isAdded } = getQuantityAndIsAdded(id);
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
                                onClick={() => handleClick(id, id_tenant)}
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