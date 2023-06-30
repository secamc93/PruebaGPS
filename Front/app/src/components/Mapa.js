import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import OIP from '../img/OIP.jpg';

const Mapa = ({ latitude, longitude }) => {
  const mapContainerStyle = {
    height: '500px',
    width: '100%',
  };

  const [center, setCenter] = useState({ lat: latitude, lng: longitude });

  useEffect(() => {
    setCenter({ lat: latitude, lng: longitude });
  }, [latitude, longitude]);

  return (
    <LoadScript googleMapsApiKey="AIzaSyCy4oTJO8VkLYv8B5AtrXVow4E3Q9OAJNw">
      <div style={mapContainerStyle} className="m-5 rounded-lg overflow-hidden border-4 border-white ">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={10}
        >
        <Marker position={{ lat: latitude, lng: longitude }} icon={OIP}/>
        </GoogleMap>
      </div>
    </LoadScript>
  );
};

export default Mapa;
