import React from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useState,useEffect } from "react";

function EliminarReserva() {
    let {id} = useParams();
    const navigate = useNavigate();
    const [reserva, setReserva] = useState(null);

    useEffect(() => {
      cargarDatosReserva();
    }, []);

    const cargarDatosReserva = async () => {
      try {
          const response = await axios.get(`http://localhost:3000/api/reservas/${id}`);
          setReserva(response.data[0]);
      } catch (error) {
        console.log(error);
      };
  };

    const onSubmit = async (e) => {
      e.preventDefault();
      try {
        await axios.delete(`http://localhost:3000/api/reservas/${id}`);
        navigate("/reservas");
        alert("Se ha eliminado la reserva");
      } catch (error) {
        console.log(error);
      }
    };

    return (
      <div className="container">
          <h1>¿Desea eliminar la reserva?</h1>
          <h3>ID:{reserva && reserva.reserva_id}{reserva && reserva.cliente_id}</h3>
          <h3>Vehículo ID: {reserva.vehiculo_id}</h3>
          <p>Fecha de Inicio: {reserva.fecha_inicio}</p>
          <p>Fecha de Fin: {reserva.fecha_fin}</p>
          <Button variant="danger" onClick={onSubmit}>Eliminar</Button>
      </div>
    );
}

export default EliminarReserva;
