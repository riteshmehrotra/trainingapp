import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Login from './login';
import HomePage from './homePage';

const App = () => {
  let [user, setName] = useState(undefined);

  let homePage = user ? <HomePage user={user} ></HomePage> :
    <Login onSubmit={(nameInput) => setName(nameInput)}></Login>;

  return (
    <Container fluid >
      {homePage}
    </Container>
  );
}

export default App;
