
import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const FetchName = ({data}) => {

    const [dataSet , setDataset] = useState();

    useEffect(() => {
        setDataset(data[0])
        console.log(data[0])
    }, [data])
    
    return (
        <div>
            <Container>
            <Row>
                    <Col md={6}> <p>name : {dataSet?.name.common}</p>
                        <p>Full-name : {dataSet?.name.official}</p>
                        <p>Flag : {dataSet?.flag}</p>
                    </Col>
                </Row>
            </Container>    
        </div>
    );
    
}

export async function getServerSideProps(name) {
    
    const res = await fetch(`https://restcountries.com/v3.1/name/${name.query.name}`)
    const data = await res.json()

    return { props: { data } }
  }
export default FetchName;