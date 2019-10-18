import React from 'react';
import styled from '@emotion/styled';

import Routes from './routes/routes';

const App = () => {
  return (
    <Container>
      <h1>Manga App</h1>
      <Routes />
    </Container>
  );
};

const Container = styled.div`
  width: 375px;
  margin: 0 auto;
  padding: 20px;
  background-color: #ecdac6;
  color: #241007;
`;

export default App;
