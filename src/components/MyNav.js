import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

function MyNav() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default MyNav;
