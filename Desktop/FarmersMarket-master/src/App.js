import React, { Component } from 'react';
import {
  Navbar,
  Nav,
  Image
} from 'react-bootstrap'

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">
            <img
              alt=""
              src="https://tse3.mm.bing.net/th?id=OIP.rx0JMzIrB16AW5PEmqpdCQHaFj&pid=Api&P=0&w=202&h=152"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            FARMERS MARKET</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/register">Signup</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </Navbar>

        <Image width="1250px" height="1150px" src="https://ak3.picdn.net/shutterstock/videos/5711726/thumb/1.jpg"
          alt="user pic" />
      </div >
    );
  }
}

export default App;



