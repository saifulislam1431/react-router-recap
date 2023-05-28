import React, { useEffect, useState } from 'react';
import Products from './Products';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <h1 className='text-center font-bold text-xl'>This is shop</h1>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
                {
                    products.slice(0, 9).map(product => <Products
                        key={product.id}
                        products={product}
                    ></Products>)
                }
            </div>
        </div>
    );
};

export default Shop;