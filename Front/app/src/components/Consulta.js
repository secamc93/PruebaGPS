import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';


const Consulta = ({ onRowSelect }) => {
  const [data, setData] = useState([]);

  const handleRowClick = (item) => {
    onRowSelect(item);
  };

  useEffect(() => {
    fetch('http://localhost:8000/api/consultar/')
      .then(response => response.json())
      .then(result => {
        // Ordenar los datos de más nuevo a más antiguo
        result.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        setData(result);
      })
      .catch(error => console.error(error));
  }, [])

  return (
    <div className="shadow-lg rounded-md overflow-hidden m-10 w-3/3 h-96 mx-auto">
      {data && data.length > 0 && (
        <div className="overflow-y-auto max-h-80">
          <table className="w-full">
            <thead className="bg-gray-500 text-white">
              <tr>
                <th className="px-4">ID</th>
                <th className="px-4">Latitud</th>
                <th className="px-4">Longitud</th>
                <th className="px-4">Sitio</th>
                <th className="px-4">Subsitio</th>
                <th className="px-4">Timespan</th>
                <th className="px-4">Temp</th>
                <th className="px-4">Creado en</th>
                <th className="px-4">Acción</th> {/* Nuevo encabezado para el botón */}
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-300' : 'bg-gray-200'} onClick={() => handleRowClick(item)}>
                  <td>{item.id}</td>
                  <td>{item.latitude}</td>
                  <td>{item.longitude}</td>
                  <td>{item.site}</td>
                  <td>{item.subsite}</td>
                  <td>{format(new Date(item.timespan), 'dd/MM/yyyy HH:mm')}</td> {/* Formateo de la fecha */}
                  <td>{item.temp}</td>
                  <td>{format(new Date(item.created_at), 'dd/MM/yyyy HH:mm')}</td> {/* Formateo de la fecha */}
                  <td className="px-4">
                    <button className="bg-red-400 black py-1 px-3 rounded-md">Seleccionar</button> {/* Botón de selección */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Consulta;
