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
          }catch (error) {
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
        <button className="btn btn-outline-dark" onClick={handleGoBack}>
            Volver
        </button>
        <Link to="/vehiculos/agregar" className="btn btn-primary">
            Agregar Vehiculo
        </Link>
        <table className="table">
            <thead>
                <th>ID VEHICULO</th>
                <th>MARCA</th>
                <th>MODELO</th>
                <th>AÑO</th>
                <th>PRECIO POR DIA</th>
                <th>DISPONIBILIDAD</th>
                <th>OPCIONES</th>
            </thead>
            <tbody>
                {vehiculos.map((vehiculo) => (
                    <tr>
                        <td>{vehiculo.vehiculo_id}</td>
                        <td>{vehiculo.marca}</td>
                        <td>{vehiculo.modelo}</td>
                        <td>{vehiculo.anio}</td>
                        <td>{vehiculo.precio_por_dia}</td>
                        <td>{vehiculo.disponibilidad}</td>
                        <td>
                        <Link to={`/vehiculos/actualizar/${vehiculo.vehiculo_id}`} className="btn btn-outline-info">Editar</Link>
                        <Link to={`/vehiculos/eliminar/${vehiculo.vehiculo_id}`} className="btn btn-outline-danger">Eliminar</Link>
                    </td>
                    </tr>))}
              </tbody>
          </table>
      </div>
    );
}

export default ListaVehiculos;
