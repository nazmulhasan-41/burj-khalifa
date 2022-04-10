import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Suit.css';


const Suit = (props) => {
    const suit = props.suit;
    return (


        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={suit.picture} />
            <Card.Body>
                <Card.Title>{suit.suitname}</Card.Title>
                <Card.Text>

                    {(suit.about).slice(0, 100)}
                </Card.Text>
                <Row className='priceInfo'>
                    <Col className='company' xs={12} md={6}> {suit.company}</Col> 
                    <Col className='cost' xs={12} md={6}>{suit.cost}</Col>
                    
                </Row>
                <div className='button'>
                <Link className='detailsButton' to='/details'>
                    Book
                    </Link>

                </div>

            </Card.Body>
        </Card>

    );
};

export default Suit;