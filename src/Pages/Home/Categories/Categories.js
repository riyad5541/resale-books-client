import React, { useEffect, useState } from 'react';
import Category from './Category';

const Categories = () => {
    const [allCategories, setAllCategories] = useState([])

    useEffect( () =>{
        fetch('allCategories.json')
        .then(res => res.json())
        .then(data =>setAllCategories(data))
    } ,[])
    return (
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16'>
            {
                allCategories.map(category => <Category
                    key={category.id}
                    category={category}
                    ></Category>
                    )
            }
        </div>
    );
};

export default Categories;