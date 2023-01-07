import React, { useEffect, useState } from 'react';
import { Container, ListGroup, Row, Col } from 'react-bootstrap';

const Fetch = ({data}) => {
    const [dataSet , setDataset] = useState();

    useEffect(() => {
        setDataset(data)
    },[data])
    
    const linkPage = (name) => {
        window.location = `/fetch/${name}`;
    }
    return (
        <Container>
            <Row>
                <Col md={6}>
            <ListGroup>
            {dataSet ? dataSet.map((data, i) => {
                return <ListGroup.Item key={i} onClick={()=> linkPage(data.name.common)}>{data.name.common}</ListGroup.Item>
            }):''}
                </ListGroup>
                </Col>
            </Row>
        </Container>
    )
}

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://restcountries.com/v3.1/all`)
    const data = await res.json()
   
    // Pass data to the page via props
    return { props: { data } }
  }

export default Fetch;