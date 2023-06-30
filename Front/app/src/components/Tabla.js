import React from 'react';
import fetchData from '../App'
import { format } from 'date-fns';

const Tabla = ({ data , fetchData}) => {
  return (
    <div className="flex justify-center items-center flex-col">
      {data && data.id && (
        <table className="shadow-lg rounded-md from-red-500  text-justify m-10">
          <tbody>
            <tr className="bg-red-200 ">
              <th className="p-2">ID</th>
              <td className="p-2">{data.id}</td>
            </tr>
            <tr className="bg-red-100">
              <th className="p-2">Latitud</th>
              <td className="p-2">{data.latitude}</td>
            </tr>
            <tr className="bg-red-200">
              <th className="p-2">Longitud</th>
              <td className="p-2">{data.longitude}</td>
            </tr>
            <tr className="bg-red-100">
              <th className="p-2">Provincia</th>
              <td className="p-2">{data.site}</td>
            </tr>
            <tr className="bg-red-200">
              <th className="p-2">Departamento</th>
              <td className="p-2">{data.subsite}</td>
            </tr>
            <tr className="bg-red-100">
              <th className="p-2">Timespan</th>
              <td className="p-2">{format(new Date(data.timespan), 'dd/MM/yyyy HH:mm')}</td>
</tr>
            <tr className="bg-red-200">
              <th className="p-2">Temp</th>
              <td className="p-2">{data.temp}</td>
            </tr>
            <tr className="bg-red-100">
              <th className="p-2">Creado en</th>
              <td className="p-2">{format(new Date(data.created_at), 'dd/MM/yyyy HH:mm')}</td>
            </tr>
          </tbody>
        </table>
      )}
        <div className="mt-auto">
        <button 
          className="bg-orange-500 m-1 py-2 px-4 text-white text-xl rounded-lg shadow-lg hover:bg-orange-600 transition-colors duration-200"
          onClick={fetchData}
        >
          Generar
        </button>
      </div>
    </div>
  );
}


export default Tabla;

