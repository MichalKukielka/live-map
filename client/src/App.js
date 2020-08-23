import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import 'bootstrap/dist/css/bootstrap.min.css';

import { serverSocket } from './constants';

import Map from './components/Map/Map';
import Car from './components/ui/Car';
import Search from './components/ui/Search';
import LoadingWheel from './components/ui/LoadingWheel';

function App() {

  const [isLoading, setIsLoading] = useState(true)
  const [cars, setCars] = useState([])
  const [query, setQuery] = useState('');
  const [filteredCars, setfilteredCars] = useState([]);

  useEffect(() => {
    const socket = io(serverSocket);
    socket.on('cars', (event) => {
      setCars(event)
      setIsLoading(false)
    })
  }, [cars])


  useEffect(() => {
    setfilteredCars(
      cars.filter(car => {
        return car.name.toLowerCase().includes(query.toLowerCase())
      })
    )
  }, [query, cars]);

  if (isLoading) {
    return (
      <LoadingWheel />
    )
  }

  return (
    <div className="container bg-light">
      <div className="row py-2">
        <div className="col-4">
          {
            filteredCars.map(car => (
              <Car car={car} key={car.id} />
            ))
          }
        </div>
        <div className="col-8">
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
