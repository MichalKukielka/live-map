import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

import 'bootstrap/dist/css/bootstrap.min.css';

import Map from './components/Map';
import Car from './components/Car';
import Search from './components/Search';

function App() {

  const [cars, setCars] = useState([])
  const [query, setQuery] = useState('');
  const [filteredCars, setfilteredCars] = useState([]);

  useEffect(() => {
    const socket = io('http://localhost:8080');
    socket.on('cars', (event) => {
      setCars(event)
    })
  }, [cars])


  useEffect(() => {
    console.log('QUERY IN APP', query)
    setfilteredCars(
      cars.filter(car => {
        return car.name.toLowerCase().includes(query.toLowerCase())
      })
    )
  }, [query, cars]);

  return (
    <div className="container bg-light">
      <div className="row py-2">
        <div className="col-6">
          {
            filteredCars.map(car => (
              <Car car={car} key={car.id}/>
            ))
          }
        </div>
        <div className="col-6">
          <div className="row mx-1">
            <Search getQuery={(query) => setQuery(query)} />
          </div>
          <div className="row">
            <Map cars={filteredCars} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
