import React from 'react';
import { Link } from 'react-router-dom';

const Products = ({ products }) => {
    const{img,price,name,id} = products;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className='text-center font-bold text-lg'>Price: {price}</p>
                <Link to={`/details/${id}`} className="card-actions justify-end">
                    <button className="btn btn-primary">View details</button>
                </Link>
            </div>
        </div>
    );
};

export default Products;