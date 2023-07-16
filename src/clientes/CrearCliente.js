import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function CrearCliente(){
    const [cliente_id,setClienteID] = useState("");
    const [nombre,setNombre] = useState("");
    const [apellido,setApellido] = useState("");
    const [email,setEmail] = useState("");
    const [telefono,setTelefono] = useState("");
    const navigate = useNavigate();

    const onSubmit = async (e) => {
    e.preventDefault();
    try {
        const fecha_registro = new Date().toISOString().slice(0, 19).replace('T', ' ');
        await axios.post('http://localhost:3000/api/cliente', {
            cliente_id,
            nombre,
            apellido,
            email,
            telefono,
            fecha_registro
        });
        //navigate("/clientes");
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
                    <input type="text" className="form-control" value={cliente_id} onChange={(e) => setClienteID(e.target.value)}></input>
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
                    <label>EMAIL</label>
                    <input type="text" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <div className="form-group">
                    <label>TELEFONO</label>
                    <input type="text" className="form-control" value={telefono} onChange={(e) => setTelefono(e.target.value)}></input>
                </div>
                <button type="submit" className="btn btn-primary">Crear Cliente</button>
            </form>
        </div>

    );
}
export default CrearCliente;