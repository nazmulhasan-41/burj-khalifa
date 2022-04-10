import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { Context } from '../../App';

const PrivateRoute = ({children}) => {

    const { loggedInUser,setLoggedInUser } = useContext(Context);

    return (
        <div>
            {
                loggedInUser.email ?
                children : <Navigate to='/login'/>
            }

            
        </div>
    );
};

export default PrivateRoute;