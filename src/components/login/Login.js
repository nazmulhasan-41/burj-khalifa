import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import './Login.css';
import { Context } from '../../App';
import { Navigate, useLocation, useAuth, useHistory } from 'react-router-dom';

const Login = () => {

    // const { value, user } = useContext(Context);
    const { data,setData, loggedInUser,setLoggedInUser } = useContext(Context);

    const provider = new GoogleAuthProvider();

    const googleSignInHandler = () => {

        const auth = getAuth();
        signInWithPopup(auth, provider)
          .then((result) => {    
            // console.log(result.user);
            setLoggedInUser(result.user);
            
          }).catch((error) => {

            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode,':',errorMessage);
    
          });
      }

    return (
        <div className='loginArea'>

            <Button onClick={googleSignInHandler} variant="primary">Google  Sign In</Button>

        </div>
    );
};

export default Login;