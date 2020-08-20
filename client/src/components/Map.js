import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';

function Map({ cars }) {

  const ApiKey = `${process.env.REACT_APP_API_KEY}`

  const [zoom, setZoom] = useState(10);
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
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        center={center}
        defaultZoom={zoom}
      >
        {cars.map(car => (
          < Marker lat={car.lat} lng={car.lng} id={car.id} color="yellow"/>
        ))}

      </GoogleMapReact>
    </div>
  );
}

export default Map
