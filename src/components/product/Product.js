import React from 'react';
import { Button } from 'react-bootstrap';

const Product = (props) => {
    return (
        <>
         {props.pd.name} <Button>add to cart</Button>
         
        </>
    );
};

export default Product;