import React, {useEffect,useState} from "react";
import axios from "axios";
import {useParams,useNavigate} from "react-router-dom";

function ActualizarCliente(){
    const {id} = useParams();
    const [cliente_id,setClienteID] = useState("");
    const [nombre,setNombre] = useState("");
    const [apellido,setApellido] = useState("");
    const [email,setEmail] = useState("");
    const [telefono,setTelefono] = useState("");
    const navigate = useNavigate("");

   
    const obtenerDatosCliente = async () => {
        const response = await axios.get(`http://localhost:3000/api/cliente'${id}`);
        const cliente = response.data[0];
        setClienteID(cliente.cliente_id);
        setNombre(cliente.nombre);
        setApellido(cliente.apellido);
        setEmail(cliente.email);
        setTelefono(cliente.telefono);  
    };

    useEffect(() => {
        obtenerDatosCliente();
    },[]);
    
    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const clienteActualizado = { nombre, apellido, email, telefono };
            await axios.patch(`http://localhost:3000/api/cliente'${id}`, clienteActualizado);
            navigate("/clientes");
        }catch(error) {
            console.log(error);
        }  
    };
    return (
        <div className="container">
            <h1>Actualizar Cliente</h1>
            <hr></hr>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>RUT</label>
                    <input type="text" className="form-control" value={cliente_id} onChange={(e) => setClienteID(e.target.value)} disabled ></input>
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
                    <input type="text" className="form-control" value={telefono} onChange={(e) =>setTelefono (e.target.value)}></input>
                </div>
                <button type="submit" className="btn btn-primary">Actualizar Cliente</button>
            </form>
        </div>
    );
}
export default ActualizarCliente;