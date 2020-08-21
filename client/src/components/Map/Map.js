import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';

function Map({ cars }) {

  const [center, setCenter] = useState([]);

  useEffect(() => {
    if(cars.length!==0){
      const lateralAverage = cars.reduce((total, car) => total + car.lat, 0) / cars.length
      const longitudinalAverage = cars.reduce((total, car) => total + car.lng, 0) / cars.length
      setCenter({
        lat: lateralAverage,
        lng: longitudinalAverage
      })
    }

  }, [cars])

  return (
    <div className="mx-3 rounded" style={{ height: '100vh', width: '100vh' }}>
      <GoogleMapReact
        center={center}
        defaultZoom={10}>
        {cars.map(car => (
          < Marker key={car.id} lat={car.lat} lng={car.lng} id={car.id} color="#f0ad4e"/>
        ))}
      </GoogleMapReact>
    </div>
  );
}

export default Map
