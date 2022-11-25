import React from 'react';

const Category = ({ category }) => {
    const { name, img } = category;
    return (
        <div>
            <div className="card w-96 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl h-96" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-2xl">{name}</h2>
                </div>
            </div>
        </div>
    );
};

export default Category;