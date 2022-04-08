import './App.css';
import firebaseConfig from './firebase.config';
import { Button, Container } from 'react-bootstrap';
import { Routes, Route, Link } from "react-router-dom";
import Header from './components/header/Header';
import Home from './components/home/Home';
import { initializeApp } from 'firebase/app';



const app = initializeApp(firebaseConfig);

function App() {
  return (

    <Container>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />

      </Routes>
      
    </Container>

  );
}

export default App;
