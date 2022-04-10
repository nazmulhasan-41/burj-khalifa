import React, { useContext, useEffect } from 'react';
import { Button, Row } from 'react-bootstrap';
import './Home.css';
import information from '../../data.json';
import { Context } from '../../App';
import Suit from '../suit/Suit';

const Home = () => {
  const { data,setData, loggedInUser,setLoggedInUser } = useContext(Context);

  //const [data, setData] = value;

useEffect(() => {
    setData(information);
    // console.log(data);
  });

  return (
    <div>
      <Row>
      {
        data.map(suit=><Suit key={suit._id} suit={suit}></Suit>)
      }

      </Row>

      
    </div>
  );
};

export default Home;