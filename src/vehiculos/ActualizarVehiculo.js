import React, {useEffect,useState} from "react";
import axios from "axios";
import {useParams,useNavigate} from "react-router-dom";

function ActualizarVehiculo(){
    const {id} = useParams();
    const navigate = useNavigate();
    const [vehiculo_id, setVehiculoID] = useState("");
    const [marca, setMarca] = useState("");
    const[modelo, setModelo] = useState("");
    const[anio, setAnio] = useState("");
    const[precio_por_dia, setPrecio] = useState("");
    const [disponibilidad, setDisponibilidad] = useState("");
    const [imagenVehiculo, setImagenVehiculo] = useState(null);

    const obtenerDatosVehiculo = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/api/vehiculo/${id}`);
            const vehiculo = response.data;
            setVehiculoID(vehiculo.vehiculo_id);
            setMarca(vehiculo.marca);
            setModelo(vehiculo.modelo);
            setAnio(vehiculo.anio);
            setPrecio(vehiculo.precio_por_dia);
            setDisponibilidad(vehiculo.disponibilidad);
            setImagenVehiculo(vehiculo.imagenVehiculo);
        } catch (error) {
            console.log(error);
        }
    };
  
    useEffect(() => {
        obtenerDatosVehiculo();
      }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const vehiculoActualizado = { marca, modelo, anio, precio_por_dia, disponibilidad};
            await axios.put(`http://localhost:3000/api/vehiculo/${id}`, vehiculoActualizado);
            navigate("/vehiculos");
        }catch(error) {
            console.log(error);
        }  
    };
    return (
        <div className="container">
            <h1>Actualizar Vehiculo</h1>
            <hr></hr>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>ID</label>
                    <input type="number" className="form-control" value={vehiculo_id} onChange={(e) => setVehiculoID(e.target.value)} disabled ></input>
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
                    <label>PRECIO </label>
                    <input type="number" step="0.01" className="form-control" value={precio_por_dia} onChange={(e) =>setPrecio(e.target.value)}></input>
                </div>
                <div className="mb-3">
                <label htmlFor="disponibilidad" className="form-label"> DISPONIBILIDAD</label>
                <select className="form-select" id="disponibilidad"value={disponibilidad} onChange={(e) => setDisponibilidad(e.target.value)} >
                  <option value="disponible">Disponible</option>
                  <option value="en uso">En uso</option>
                  <option value="en mantenimiento">En mantenimiento</option>
                </select>
              </div>
                <div className="form-group">
                    <label>Imagen</label>
                    <input type="file" className="form-control" onChange={(e) => setImagenVehiculo(e.target.files[0])}></input>
                </div>
                <button type="submit" className="btn btn-primary">Actualizar Vehiculo</button>
            </form>
            <br></br>
            <div className="card mb-3" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                {imagenVehiculo && ( <img src={imagenVehiculo} className="img-fluid rounded-start" alt="vehiculo" />)}
              </div>
              <div className="col-md-8">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{marca} {modelo}</h5>
                    <p className="card-text">Año: {anio}</p>
                    <p className="card-text">Precio por día: {precio_por_dia}</p>
                    <p className="card-text">Disponibilidad: {disponibilidad}</p>
                  </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActualizarVehiculo;