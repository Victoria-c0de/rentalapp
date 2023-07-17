import React from "react";
import axios from "axios";
import {useParams,useNavigate} from "react-router-dom";
import { Button } from "react-bootstrap";
import { useState,useEffect } from "react";
function EliminarCliente() {
    let {id} = useParams();
    const navigate = useNavigate();
    const [cliente, setCliente] = useState([]);

    useEffect(() => {
      cargarDatosCliente();
    }, []);

    const cargarDatosCliente = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/cliente/${id}`);
        setCliente(response.data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    const onSubmit = async (e) => {
      e.preventDefault();
      try {
        await axios.delete(`http://localhost:3000/api/cliente/${id}`);
        navigate("/clientes");
        alert("Se ha eliminado el cliente");
      } catch (error) {
        console.log(error);
      }
    };

    return (
        <div className="container">
            <h1>¿Desea eliminar al cliente?</h1>
            <h3>{cliente && cliente.nombre} {cliente && cliente.apellido}</h3>
            <p>Dirección: {cliente && cliente.direccion}</p>
            <p>Teléfono: {cliente && cliente.telefono}</p>
            <p>Email: {cliente && cliente.email}</p>
            <Button variant="danger" onClick={onSubmit}>Eliminar</Button>
        </div>
    );
}

export default EliminarCliente;
