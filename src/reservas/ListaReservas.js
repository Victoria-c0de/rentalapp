import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function ListaReservas() {
    const [reservas, setReservas] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
      const fetchReservas = async () => {
        try {
          const response = await axios.get("http://localhost:3000/api/reservas");
          setReservas(response.data);
        } catch (error) {
          console.log(error);
        }
      };
      fetchReservas();
    }, []);

    const handleGoBack = () => {
      navigate(-1);
    };

    return (
      <div className="container">
        <h1>Lista de Reservas</h1>
        <hr></hr>
        <button className="btn btn-outline-dark" onClick={handleGoBack}>
          Volver
        </button>
        <Link to="/reservas/agregar" className="btn btn-primary">
          Agregar Reserva
        </Link>
        <table className="table">
            <thead>
              <tr>
                <th>ID RESERVA</th>
                <th>ID CLIENTE</th>
                <th>ID VEHICULO</th>
                <th>FECHA DE INICIO</th>
                <th>FECHA FINAL</th>
                <th>OPCIONES</th>
              </tr>
            </thead>
            <tbody>
              {reservas.map((reserva) => (
                  <tr>
                      <td>{reserva.reserva_id}</td>
                      <td>{reserva.cliente_id}</td>
                      <td>{reserva.vehiculo_id}</td>
                      <td>{reserva.fecha_inicio}</td>
                      <td>{reserva.fecha_fin}</td>
                      <td>
                      <Link to={`/reservas/actualizar/${reserva.reserva_id}`} className="btn btn-outline-info">Editar</Link>
                      <Link to={`/reservas/eliminar/${reserva.reserva_id}`} className="btn btn-outline-danger">Eliminar</Link>
                  </td>
                  </tr>))}
            </tbody>
        </table>
      </div>
    );
}

export default ListaReservas;
  