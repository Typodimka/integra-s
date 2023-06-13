import React from 'react';

import Container from '@mui/material/Container';
import {Navigation} from "./components/Navigation";
import CreateClient from "./components/CreateClient"
import CreateServer from  "./components/CreateServer"

// const {loading, error, clients }= useClients()




function App() {


  return (
  <>
    <Navigation/>
      <Container maxWidth="xl" sx={{p: '0px !important'}}>
        <CreateClient/>



        <CreateServer />
      </Container>
  </>
  );
}

export default App;
