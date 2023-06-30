import React, { useState, useEffect } from 'react';
import Tabla from '../../../Front/app/src/components/Tabla';
import Mapa from '../../../Front/app/src/components/Mapa';
import Consulta from '../../../Front/app/src/components/Consulta';
import './App.css';

const App = () => {
  const [data, setData] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);
  const [mapCoordinates, setMapCoordinates] = useState({ latitude: 0, longitude: 0 });

  const handleRowSelect = (row) => {
    setSelectedRow(row);
    setMapCoordinates({ latitude: row.latitude, longitude: row.longitude });
  };

  const fetchData = () => {
    fetch('http://localhost:8000/api/generar/')
      .then(response => response.json())
      .then(result => setData(result))
      .catch(error => console.error(error));
  };

  useEffect(() => {
    if (data && data.latitude && data.longitude) {
      setMapCoordinates({ latitude: data.latitude, longitude: data.longitude });
    }
  }, [data]);

  return (
    <div className="bg-orange-100 rounded-lg shadow-lg m-20">
      <h1 className="text-6xl font-bold mb-4 text-center">Prueba GPS - Finazauto</h1>
      <p className="text-m text-center">Por: Sebastian Leonardo Camacho Mateus</p>
      <div className="flex flex-row justify-center items-start">
        <Tabla data={data} fetchData={fetchData} />
        <div className="flex flex-col items-center justify-start space-y-10">
          <Mapa latitude={mapCoordinates.latitude} longitude={mapCoordinates.longitude} />
          <Consulta onRowSelect={handleRowSelect} />
        </div>
      </div>
    </div>
  );
}

export default App;


