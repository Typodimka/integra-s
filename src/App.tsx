import React from 'react';

import Container from '@mui/material/Container';
import {Navigation} from "./components/Navigation";
import TableClient from "./components/TableClient"
import TableServer from "./components/TableServer"

function App() {

  return (
  <>
    <Navigation/>
      <Container maxWidth="xl" sx={{p: '0px !important'}}>
        <TableClient/>
        <TableServer />
      </Container>
  </>
  );
}

export default App;
