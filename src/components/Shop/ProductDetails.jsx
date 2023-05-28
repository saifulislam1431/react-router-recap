import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { id } = useParams();
    console.log(id);

    const [products, setProducts] = useState({});
    const { img, price, name, ratings, seller, shipping, category } = products;

    useEffect(() => {
        fetch("../../../public/data.json")
            .then(res => res.json())
            .then(data => {
                const singleProduct = data.find(product => product.id == id)
                setProducts(singleProduct)
            })
    }, [])
    console.log(products);

    return (

        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">{name}</h1>
                    <div className='flex items-center justify-between text-lg font-bold mt-5'>
                        <div>
                            <p>{seller}</p>
                            <p>{price}</p>
                            <p>{shipping}</p>
                        </div>
                        <div>
                            <p>{category}</p>
                            <p>{ratings}</p>
                        </div>
                    </div>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;