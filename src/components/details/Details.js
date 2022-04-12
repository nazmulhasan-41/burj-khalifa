import React from 'react';
import { useLocation } from 'react-router-dom';


const Details = () => {
    let location=useLocation();
    console.log(location)
    return (
        <div>
            details page
        </div>
    );
};

export default Details;