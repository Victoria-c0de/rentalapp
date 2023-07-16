import React, { useState, useEffect } from "react";
import axios from "axios";

function CrearVehiculo(){
    const [vehiculo_id, setVehiculo] = useState("");
    const [marca, setMarca] = useState("");
    const [modelo, setModelo] = useState("");
    const [anio, setAnio] = useState("");
    const [precio_por_dia, setPrecio] = useState("");
    const [imagenVehiculo, setImagenVehiculo] = useState(null);

    useEffect(() => {
        const obtenerImagenVehiculo = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/imagenes?_where=(vehiculo_id,eq,${vehiculo_id})`);
                setImagenVehiculo(response.data[0].urlImagen);
            } catch (error) {
                console.log(error);
            }
        }

        if (vehiculo_id) {
            obtenerImagenVehiculo();
        }
    }, [vehiculo_id]);

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3000/api/vehiculo', {
                vehiculo_id,
                marca,
                modelo,
                anio,
                precio_por_dia
            });
            alert("Se ha creado el vehículo correctamente");
        }catch(error) {
            console.log(error);
        }
    };

    return (
        <div className="container">
            <h1>Crear Vehiculo</h1>
            <hr></hr>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>ID</label>
                    <input type="text" className="form-control" value={vehiculo_id} onChange={(e) => setVehiculo(e.target.value)}></input>
                </div>
                <div className="form-group">
                    <label>MARCA</label>
                    <input type="text" className="form-control" value={marca} onChange={(e) => setMarca(e.target.value)}></input>
                </div>
                <div className="form-group">
                    <label>MODELO</label>
                    <input type="text" className="form-control" value={modelo} onChange={(e) => setModelo(e.target.value)}></input>
                </div>
                <div className="form-group">
                    <label>AÑO</label>
                    <input type="text" className="form-control" value={anio} onChange={(e) => setAnio(e.target.value)}></input>
                </div>
                <div className="form-group">
                    <label>PRECIO</label>
                    <input type="text" className="form-control" value={precio_por_dia} onChange={(e) => setPrecio(e.target.value)}></input>
                </div>
                <button type="submit" className="btn btn-primary">Crear Vehiculo</button>
            </form>
            <br></br>
            <div className="card mb-3" style={{maxWidth: "540px"}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={imagenVehiculo} className="img-fluid rounded-start" alt="vehiculo"/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{marca} {modelo}</h5>
                            <p className="card-text">Año: {anio}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CrearVehiculo;
