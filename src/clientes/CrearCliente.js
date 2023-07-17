import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function CrearCliente(){
    const [cliente_id,setClienteID] = useState("");
    const [nombre,setNombre] = useState("");
    const [apellido,setApellido] = useState("");
    const [direccion,setDireccion] = useState("");
    const [telefono,setTelefono] = useState("");
    const [email,setEmail] = useState("");
    const navigate = useNavigate();

    //enviar los datos de un formulario 
    //configuracion de fecha
    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3000/api/cliente', {
                cliente_id,
                nombre,
                apellido,
                direccion,
                telefono,
                email,
            });
            alert("Se ha creado el cliente correctamente");
        }catch(error) {
            console.log(error);
        }
        };

    return (
        <div className="container">
            <h1>Crear Cliente</h1>
            <hr></hr>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>RUT</label>
                    <input type="number" className="form-control" value={cliente_id} onChange={(e) => setClienteID(e.target.value)}></input>
                </div>
                <div className="form-group">
                    <label>NOMBRES</label>
                    <input type="text" className="form-control" value={nombre} onChange={(e) => setNombre(e.target.value)}></input>
                </div>
                <div className="form-group">
                    <label>APELLIDOS</label>
                    <input type="text" className="form-control" value={apellido} onChange={(e) => setApellido(e.target.value)}></input>
                </div>
                <div className="form-group">
                    <label>DIRECCION</label>
                    <input type="text" className="form-control" value={direccion} onChange={(e) => setDireccion(e.target.value)}></input>
                </div>
                <div className="form-group">
                    <label>TELEFONO</label>
                    <input type="text" className="form-control" value={telefono} onChange={(e) => setTelefono(e.target.value)}></input>
                </div>
                <div className="form-group">
                    <label>EMAIL</label>
                    <input type="text" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <button type="submit" className="btn btn-primary">Crear Cliente</button>
            </form>
        </div>

    );
}
export default CrearCliente;