import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function ListaVehiculos() {
  const [vehiculos, setVehiculos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchVehiculos = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/vehiculo");
        setVehiculos(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchVehiculos();
  }, []);

  const handleGoBack = () => {
    navigate(-1);
  };

    return (
    <div className="container">
        <h1>Lista de vehiculos</h1>
        <hr></hr>
        <button className="btn btn-primary" onClick={handleGoBack}>
            Volver
        </button>
        <Link to="/vehiculos/agregar" className="btn btn-primary">
            Agregar Vehiculo
        </Link>
        <table className="table">
            <thead>
            <tr>
                <th>ID VEHICULO</th>
                <th>Imagen</th>
                <th>MARCA</th>
                <th>MODELO</th>
                <th>AÑO</th>
                <th>PRECIO POR DIA</th>
                <th>OPCIONES</th>
            </tr>
            </thead>
            <tbody>
            {vehiculos.map((vehiculo) => (
                <tr key={vehiculo.id}>
                    <td>{vehiculo.imagen}</td>
                    <td>{vehiculo.id}</td>
                    <td>{vehiculo.marca}</td>
                    <td>{vehiculo.modelo}</td>
                    <td>{vehiculo.anio}</td>
                    <td>{vehiculo.precio_por_dia}</td>
                    <td>
                    <Link to={`/vehiculos/actualizar/${vehiculo.id}`} className="btn btn-info">Editar</Link>
                    <Link to={`/vehiculos/eliminar/${vehiculo.id}`} className="btn btn-secondary">Eliminar</Link>
                </td>
                </tr>))}
            </tbody>
        </table>
    </div>
    );
    }

export default ListaVehiculos;
