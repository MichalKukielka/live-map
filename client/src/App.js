import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

import 'bootstrap/dist/css/bootstrap.min.css';

import Map from './components/Map'

function App() {

  const [cars, setCars] = useState([])

  useEffect(() => {
    const socket = io('http://localhost:8080');
    socket.on('cars', (event) => { 
      setCars(event)
    })
  }, [cars])

  return (
    <div>
      <Map cars={cars} />
    </div>
  );
}

export default App;
