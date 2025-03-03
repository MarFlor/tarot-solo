import React from 'react';
import './App.css';
import { Home } from './components/home';
import { Container, Divider } from '@mui/material';

function App() {
  
  return (
    <div className="App">
      
      <Container>
        
        <Home />

        <Divider>If you know, you decide. <br /> Saráh Tarot © {new Date().getFullYear()}</Divider>
      </Container>      
      
    </div>
  );
}



export default App;