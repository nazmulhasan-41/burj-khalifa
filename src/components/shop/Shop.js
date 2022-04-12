import React from 'react';
import Cart from '../cart/Cart';
import Product from '../product/Product';

const Shop = () => {
    const products=[
        {name:'lenovo 10', id:1},
        {name:'apple 10', id:2},
        {name:'samsung 10', id:3},
        {name:'shawmi chaina', id:4},

    ]
        
    return (
        <div>
            {
                products.map(pd=> <li key={pd.id}><Product pd={pd}></Product></li>)
            }
            
        </div>
    );
};

export default Shop;