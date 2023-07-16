import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

function EliminarVehiculo() {
    let {id} = useParams();
    const navigate = useNavigate();
    const [vehiculo, setVehiculo] = useState([]);

    useEffect(() => {
        cargarDatosVehiculo();
    },[]);

    const cargarDatosVehiculo = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/api/vehiculo/${id}`);
            setVehiculo(response.data[0]);
        } catch (error) {
         console.log(error);
        }
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.delete(`http://localhost:3000/api/vehiculo/${id}`);
            navigate("/vehiculos");
            alert("Se ha eliminado el vehiculo");
        } catch(error) {
            console.log(error);
        }
    };

    return (
        <div className="container">
            <h1>¿Desea eliminar al vehiculo ? </h1>
            <h3>{vehiculo && vehiculo.marca} {vehiculo && vehiculo.modelo}</h3>
            <Button variant="danger" onClick={onSubmit}> Eliminar
            
            </Button>
        </div>
        
    );
}

export default EliminarVehiculo;
