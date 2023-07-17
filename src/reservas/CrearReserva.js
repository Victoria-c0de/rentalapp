import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function CrearReserva() {
    const [reserva_id, setReservaId] = useState("");
    const [cliente_id, setClienteId] = useState("");
    const [vehiculo_id, setVehiculoId] = useState("");
    const [fecha_inicio, setFechaInicio] = useState("");
    const [fecha_fin, setFechaFin] = useState("");
    const navigate = useNavigate();

    const onSubmit = async (e) => {
      e.preventDefault();
      try {
        await axios.post("http://localhost:3000/api/reservas", {
          reserva_id,
          cliente_id,
          vehiculo_id,
          fecha_inicio,
          fecha_fin,
        });
        alert("Reserva creada exitosamente");
        navigate("/reservas"); // Redirige a la lista de reservas
      } catch (error) {
        console.log(error);
      }
    };

    return (
      <div className="container">
          <h1>Crear Reserva</h1>
          <hr></hr>
          <form onSubmit={onSubmit}>
              <div className="form-group">
                  <label>ID RESERVA</label>
                  <input type="number"className="form-control" value={reserva_id} onChange={(e) => setReservaId(e.target.value)}></input>
              </div>
              <div className="form-group">
                  <label>ID Cliente</label>
                  <input type="number"className="form-control" value={cliente_id} onChange={(e) => setClienteId(e.target.value)}></input>
              </div>
              <div className="form-group">
                  <label>Vehículo</label>
                  <select type="" className="form-control" value={vehiculo_id} onChange={(e) => setVehiculoId(e.target.value)}>
                      <option value="">Seleccionar vehículo</option>
                  </select>
              </div>
              <div className="form-group">
                  <label>Fecha de Inicio</label>
                  <input type="date" className="form-control" value={fecha_inicio} onChange={(e) => setFechaInicio(e.target.value)}></input>
              </div>
              <div className="form-group">
                  <label>Fecha de Fin</label>
                  <input type="date"className="form-control" value={fecha_fin} onChange={(e) => setFechaFin(e.target.value)}></input>
              </div>
              <br></br>
              <button type="submit" className="btn btn-dark">Crear Reserva</button>
              <Link to="/" className="btn btn-outline-info">Volver a la página de inicio</Link>
              <hr></hr>
          </form>
      </div>
    );
}

export default CrearReserva;
