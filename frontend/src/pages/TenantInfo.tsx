import Sidebar from "../components/Sidebar";
import ProductCard from "../components/ProductCard";
import TenantHeader from "../components/TenantHeader";
import WelcomingText from "../components/WelcomingText";
import BackButton from "../components/BackButton";
import { useState, useEffect } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";

interface Tenant {
    id : number,
    image: string,
    name: string,
    description: string,
    rating: number,
    open_hour: string,
    close_hour: string,
}

interface Product {
    id : number,
    image: string,
    name: string,
    description: string,
    price: number,
    id_tenant: number
}

interface TenantHeader {
    image: string,
    name: string,
    description: string,
    rating: number,
    openinghour: string,
    closinghour: string,
    lowestprice: number,
    highestprice: number,
}

interface ProductCard {
    id : number,
    image: string,
    name: string,
    description: string,
    price: number
}

export default function TenantInfo() {
    const { tenantid } = useParams();

    const [joinedTenantHeaderData, setJoinedTenantHeaderData] = useState<TenantHeader[]>([]);

    const getTenantHeaderData = async () => {
        const tenantResponse = await Axios.get(`http://localhost:8000/tenants/${tenantid}`);
        const productResponse = await Axios.get("http://localhost:8000/products");

        const tenantData = tenantResponse.data.data;
        const productData = productResponse.data.data;

        // Perform the join based on the specified conditions
        // OrderData is not an array, so we need to convert it into an array
        const tenantDataArray = [tenantData];
        const result = tenantDataArray.map((tenant: Tenant) => {
            const product = productData.filter((product: Product) => product.id_tenant === tenant.id);

            return {
                image: tenant.image,
                name: tenant.name,
                description: tenant.description,
                rating: tenant.rating,
                openinghour: tenant.open_hour,
                closinghour: tenant.close_hour,
                lowestprice: Math.min(...product.map((product: Product) => product.price)),
                highestprice: Math.max(...product.map((product: Product) => product.price))
            }
        });

        setJoinedTenantHeaderData(result);

    };

    useEffect(() => {
        getTenantHeaderData();
    }, []);

    console.log(joinedTenantHeaderData);

    const [joinedProductCardData, setJoinedProductCardData] = useState<ProductCard[]>([]);

    const getProductCardData = async () => {
        const tenantResponse = await Axios.get(`http://localhost:8000/tenants/${tenantid}`);
        const productResponse = await Axios.get("http://localhost:8000/products");

        const tenantData = tenantResponse.data.data;
        const productData = productResponse.data.data;

        // Perform the join based on the specified conditions
        // OrderData is not an array, so we need to convert it into an array
        const producttenant = productData.filter((product: Product) => product.id_tenant === tenantData.id);
        const result = producttenant.map((product: Product) => {
            return {
                id: product.id,
                image: product.image,
                name: product.name,
                description: product.description,
                price: product.price
            }
        });

        setJoinedProductCardData(result);

    };

    useEffect(() => {
        getProductCardData();
    }, []);

    console.log(joinedProductCardData);

    const tableid = 1;

    return (
        // Create grid layout for sidebard, header, and main content
        <div className="grid grid-cols-5 grid-rows-8 bg-mealshub-cream min-h-screen">
            {/* Sidebar */}
            <div className="col-span-1 row-span-8">
                <Sidebar number={3} current={1} menu1="Home" page1="/" path1="M27 14.6465V29.4398C27 30.1188 26.7629 30.77 26.341 31.2501C25.919 31.7303 25.3467 32 24.75 32H19.125C18.5282 32 17.9559 31.7303 17.534 31.2501C17.112 30.77 16.875 30.1188 16.875 29.4398V23.0392C16.875 22.6997 16.7565 22.3741 16.5455 22.1341C16.3345 21.894 16.0484 21.7591 15.75 21.7591H11.25C10.9516 21.7591 10.6655 21.894 10.4545 22.1341C10.2435 22.3741 10.125 22.6997 10.125 23.0392V29.4398C10.125 30.1188 9.88794 30.77 9.46598 31.2501C9.04402 31.7303 8.47173 32 7.87499 32H2.25C1.65326 32 1.08097 31.7303 0.659009 31.2501C0.237052 30.77 2.59985e-08 30.1188 2.59985e-08 29.4398V14.6465C-4.73102e-05 14.2922 0.0645457 13.9417 0.189691 13.6172C0.314836 13.2928 0.497809 13.0014 0.72703 12.7616L11.977 0.683737L11.9925 0.666135C12.4067 0.237512 12.9464 0 13.5063 0C14.0662 0 14.6059 0.237512 15.0201 0.666135C15.0249 0.672397 15.0301 0.678277 15.0356 0.683737L26.2856 12.7616C26.5125 13.0027 26.6931 13.2946 26.8161 13.619C26.939 13.9434 27.0016 14.2933 27 14.6465Z" menu2="Shopping Cart" page2="/cart" path2="M22.2968 25.6C20.7499 25.6 19.5097 27.024 19.5097 28.8C19.5097 29.6487 19.8033 30.4626 20.326 31.0627C20.8487 31.6629 21.5576 32 22.2968 32C23.036 32 23.7449 31.6629 24.2675 31.0627C24.7902 30.4626 25.0839 29.6487 25.0839 28.8C25.0839 27.9513 24.7902 27.1374 24.2675 26.5373C23.7449 25.9371 23.036 25.6 22.2968 25.6ZM0 0V3.2H2.7871L7.80387 15.344L5.90864 19.264C5.69961 19.712 5.57419 20.24 5.57419 20.8C5.57419 21.6487 5.86783 22.4626 6.39051 23.0627C6.9132 23.6629 7.62211 24 8.36129 24H25.0839V20.8H8.94658C8.85418 20.8 8.76557 20.7579 8.70023 20.6828C8.6349 20.6078 8.59819 20.5061 8.59819 20.4C8.59819 20.32 8.61213 20.256 8.64 20.208L9.89419 17.6H20.2761C21.3213 17.6 22.241 16.928 22.7148 15.952L27.7037 5.6C27.8013 5.344 27.871 5.072 27.871 4.8C27.871 4.37565 27.7241 3.96869 27.4628 3.66863C27.2015 3.36857 26.847 3.2 26.4774 3.2H5.86684L4.5569 0M8.36129 25.6C6.81445 25.6 5.57419 27.024 5.57419 28.8C5.57419 29.6487 5.86783 30.4626 6.39051 31.0627C6.9132 31.6629 7.62211 32 8.36129 32C9.10047 32 9.80938 31.6629 10.3321 31.0627C10.8547 30.4626 11.1484 29.6487 11.1484 28.8C11.1484 27.9513 10.8547 27.1374 10.3321 26.5373C9.80938 25.9371 9.10047 25.6 8.36129 25.6Z" menu3="Orders" page3={`/order/list/${tableid}`} path3="M4.10306 1.10306C3 2.20612 3 3.97929 3 7.52941V24.4706C3 28.0207 3 29.7939 4.10306 30.8969C5.20612 32 6.97929 32 10.5294 32H21.8235C25.3736 32 27.1468 32 28.2499 30.8969C29.3529 29.7939 29.3529 28.0207 29.3529 24.4706V7.52941C29.3529 3.97929 29.3529 2.20612 28.2499 1.10306C27.1468 -1.12197e-07 25.3736 0 21.8235 0H10.5294C6.97929 0 5.20612 -1.12197e-07 4.10306 1.10306ZM10.5294 7.52941C10.0302 7.52941 9.5514 7.72773 9.19839 8.08074C8.84538 8.43375 8.64706 8.91253 8.64706 9.41176C8.64706 9.911 8.84538 10.3898 9.19839 10.7428C9.5514 11.0958 10.0302 11.2941 10.5294 11.2941H21.8235C22.3228 11.2941 22.8015 11.0958 23.1546 10.7428C23.5076 10.3898 23.7059 9.911 23.7059 9.41176C23.7059 8.91253 23.5076 8.43375 23.1546 8.08074C22.8015 7.72773 22.3228 7.52941 21.8235 7.52941H10.5294ZM10.5294 15.0588C10.0302 15.0588 9.5514 15.2571 9.19839 15.6102C8.84538 15.9632 8.64706 16.4419 8.64706 16.9412C8.64706 17.4404 8.84538 17.9192 9.19839 18.2722C9.5514 18.6252 10.0302 18.8235 10.5294 18.8235H21.8235C22.3228 18.8235 22.8015 18.6252 23.1546 18.2722C23.5076 17.9192 23.7059 17.4404 23.7059 16.9412C23.7059 16.4419 23.5076 15.9632 23.1546 15.6102C22.8015 15.2571 22.3228 15.0588 21.8235 15.0588H10.5294ZM10.5294 22.5882C10.0302 22.5882 9.5514 22.7866 9.19839 23.1396C8.84538 23.4926 8.64706 23.9714 8.64706 24.4706C8.64706 24.9698 8.84538 25.4486 9.19839 25.8016C9.5514 26.1546 10.0302 26.3529 10.5294 26.3529H18.0588C18.5581 26.3529 19.0368 26.1546 19.3898 25.8016C19.7429 25.4486 19.9412 24.9698 19.9412 24.4706C19.9412 23.9714 19.7429 23.4926 19.3898 23.1396C19.0368 22.7866 18.5581 22.5882 18.0588 22.5882H10.5294Z"/>
            </div>
            {/* Header */}
            <div className="col-span-4">
                <div className="row-span-1 ms-20 mt-9 py-3 w-11/12">
                    <WelcomingText name="Table 1"/>
                </div>
                <div className="row-span-7 mt-6 mb-9 w-11/12">
                    <div className="ms-4">
                        <BackButton page="/"/>
                    </div>
                    <div className="ms-20 py-12 bg-white rounded-3xl">
                        <TenantHeader data={joinedTenantHeaderData}/>
                        <ProductCard data={joinedProductCardData}/>
                    </div>
                </div>
            </div>
        </div>
    )
}