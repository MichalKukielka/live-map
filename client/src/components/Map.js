import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';

function Map({ cars }) {

  const ApiKey = 'AIzaSyAgzQkLA0nqJmTUqh9hKT4AGWNIPUk6EaA'

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

  console.log(center)


  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: ApiKey }}
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
