import React from "react";

import Axios from "axios";
import { useEffect, useState } from "react";

export default function Testing() {
    const [data, setData] = useState([]);

    const getData = async () => {
        const res = await Axios.get("http://localhost:8000/orders");
        setData(res.data.data);
    };

    useEffect(() => {
        getData();
    }, []);

    console.log(data);

    return (
        <div>
            <h1>Testing</h1>
            {/* <p></p> */}
            {data.map((item: any) => (
                <div key={item.id}>
                    <p>{item.id}</p>
                    <p>{item.status}</p>
                    <p>{item.time}</p>
                    <p>{item.time}</p>
                </div>
            ))}
        </div>
    );
}
