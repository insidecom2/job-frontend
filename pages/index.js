// import { Button } from 'bootstrap';
import { Container, Row, Col,Button } from 'react-bootstrap';
import Login from '../src/components/Login';
import React, { useState } from 'react';
import Register from '../src/components/Register';

export default function Home() {
    const [switchComponent , setSwitchComponent] = useState('login');
    return (
        <Container className='pt-4'>
            <Row className='py-5'>
                <Col lg={6}>
                    <Button onClick={() => setSwitchComponent('login')}>Login</Button> | 
                     <Button variant="success" onClick={() => setSwitchComponent('register')}> Register</Button> 
                </Col>
            </Row>
            <Row>
                <Col md={6} lg={6}>
                    {switchComponent == 'login' ?<Login /> : <Register/>}
                </Col>
            </Row>
        </Container>
    );
}