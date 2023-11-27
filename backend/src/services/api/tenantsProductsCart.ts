/* eslint-disable no-unused-vars */
import Axios from "axios";
import { useEffect, useState } from "react";

interface cartItem {
    id: number;
    quantity: number;
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
  

export default function tenantsProductsCart() {
    const [tenantData, setTenantData] = useState<Tenant[]>([]);

    const getTenantData = async () => {
        const tenantResponse = await Axios.get(`http://localhost:8000/tenants`);

        const tenantData = tenantResponse.data.data;

        const result = tenantData.map((tenant: Tenant) => {
            return {
                id: tenant.id,
                image: tenant.image,
                name: tenant.name
            };
        });

        setTenantData(result);

    };

    useEffect(() => {
        getTenantData();
    }, []);

    console.log(tenantData);

    const [productData, setProductData] = useState<Product[]>([]);

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
            };
        });

        setProductData(result);

    };

    useEffect(() => {
        getProductData();
    }, []);

    console.log(productData);

    const getTenantId = (cartItem: cartItem): number => {
        const item = productData.find((i) => i.id === cartItem.id);
        const tenant = tenantData.find((t) => t.id === item?.id_tenant);
        console.log(tenant);
        return tenant?.id || 0;
    };
    
    const getTenantImage = (cartItem: cartItem): string => {
        const item = productData.find((i) => i.id === cartItem.id);
        const tenant = tenantData.find((t) => t.id === item?.id_tenant);
        console.log(tenant);
        return tenant?.image || "";
    };
    
    const getTenantName = (cartItem: cartItem): string => {
        const item = productData.find((i) => i.id === cartItem.id);
        const tenant = tenantData.find((t) => t.id === item?.id_tenant);
        console.log(item);
        return tenant?.name || "";
    };
}