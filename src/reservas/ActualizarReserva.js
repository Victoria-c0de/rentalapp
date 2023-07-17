import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function ActualizarReserva() {
  const { id } = useParams();
  const [reserva_id, setReservaId] = useState("");
  const [fecha_inicio, setFechaInicio] = useState("");
  const [fecha_fin, setFechaFin] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    obtenerDatosReserva();
  }, []);

  const obtenerDatosReserva = async () => {
      const response = await axios.get(`http://localhost:3000/api/reservas/${id}`);
      setReservaId(response.data[0]);
      setReservaId(response.reserva_id);
      setFechaInicio(response.fecha_inicio);
      setFechaFin(response.fecha_fin);
    };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
        const reservaActualizada = { fecha_inicio, fecha_fin};
        await axios.patch(`http://localhost:3000/api/reservas/${id}`, reservaActualizada);
        navigate("/reservas");
        alert("Se ha actualizado la reserva");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h1>Actualizar Reserva</h1>
      <form onSubmit={onSubmit}>
      <div className="mb-3">
          <label htmlFor="reserva_id" className="form-label">ID Reserva</label>
          <input type="number" className="form-control" id="reserva_id" value={reserva_id} onChange={(e) => setReservaId(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="fecha_inicio" className="form-label">Fecha de Inicio</label>
          <input type="date" className="form-control" id="fecha_inicio" value={fecha_inicio} onChange={(e) => setFechaInicio(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="fecha_fin" className="form-label">Fecha de Fin</label>
          <input type="date" className="form-control" id="fecha_fin" value={fecha_fin} onChange={(e) => setFechaFin(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Actualizar Reserva</button>
      </form>
    </div>
  );
}

export default ActualizarReserva;
