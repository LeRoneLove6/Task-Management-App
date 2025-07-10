import React from "react";
import { Col, Container } from "react-bootstrap";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogOutButton";

const HomePage: React.FC = () => {
  return (
    <Container>
      <Col>
        <h1>Hello </h1>
        <LoginButton />
        <LogoutButton />
      </Col>
    </Container>
  );
};

export default HomePage;