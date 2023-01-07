// import { Button } from 'bootstrap';
import { Container, Row, Col, Button, Navbar } from "react-bootstrap";
import React, { useState } from "react";
import NavBar from "../src/components/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar></NavBar>
      <Container className="pt-4">
        <Row className="py-5">
            <h1>Hello this is my test link website </h1>
        </Row>
      </Container>
    </div>
  );
}
