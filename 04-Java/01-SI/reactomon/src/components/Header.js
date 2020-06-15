import React from "react";
import logo from "./../img/logo.jpg";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Header() {
  return (
    <Container>
      <img src={logo} className="img-fluid" alt="logo" />
      <Row>
        <Col className="text-center">
          <Button className="mr-1">Pokémons</Button>
          <Button className="ml-1">Types</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
