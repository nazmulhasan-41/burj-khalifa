import './App.css';
import firebaseConfig from './firebase.config';
import { Button, Container } from 'react-bootstrap';
import { Routes, Route, Link } from "react-router-dom";
import Header from './components/header/Header';
import Home from './components/home/Home';
import { initializeApp } from 'firebase/app';
import { createContext, useState } from 'react';
import Details from './components/details/Details';
import Login from './components/login/Login';
import PrivateRoute from './components/privateRoute/PrivateRoute';
import Redux from './components/redux/Redux';

const app = initializeApp(firebaseConfig);
export const Context = createContext('Default Value');


function App() {

  const [data,setData]=useState([]);
  const [loggedInUser,setLoggedInUser]=useState({});

  return (
    <Context.Provider value={{ data,setData, loggedInUser,setLoggedInUser}} >

    User: {loggedInUser.email}
    <Container>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/details" element={<Details/>} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/redux" element={<Redux />} />


        <Route
          path="/details"
          element={
            <PrivateRoute>
              <Details />
            </PrivateRoute>
          }
        />


      </Routes>
    </Container>
    </Context.Provider>
  );
}

export default App;
