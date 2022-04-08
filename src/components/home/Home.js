import React from 'react';
import { Button } from 'react-bootstrap';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";


const Home = () => {
    
const provider = new GoogleAuthProvider();

    const googleSignInHandler=()=>{


        const auth = getAuth();
        signInWithPopup(auth, provider)
          .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
           
            console.log(result.user);
            // ...
          }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            
            // ...
          });

    }

    return (
        <div>
            <Button onClick={googleSignInHandler} variant="primary">Google Sign In</Button>
        </div>
    );
};

export default Home;