import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

import 'bootstrap/dist/css/bootstrap.min.css';

import Map from './components/Map'

function App() {

  const socket = io('http://localhost:8080');
  const [cars, setCars] = useState([])

  
  useEffect(() => {

    socket.on('cars', (event) => { 
      setCars(event)
    })

  }, [cars])



  return (
    <div>
      <Map cars={cars} style={{
        height: '500px',
        width: '300px'

      }} />
    </div>
  );
}

export default App;
