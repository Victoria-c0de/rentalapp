import React , {useEffect,useState} from "react";
import axios from "axios";
import { Link, useNavigate} from "react-router-dom";

function ListaClientes(){
    const [clientes,setClientes] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchClientes  = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/cliente');
                setClientes(response.data);
            }catch(error) {
               console.log(error);
            }
        };
        fetchClientes();
   
    },[]);

    const handleGoBack = () => {
        navigate(-1);
      };
    
    return (
        <div className="container">
            <h1>Lista de clientes</h1>
            <hr></hr>
            <button className="btn btn-outline-dark" onClick={handleGoBack}>
            Volver
            </button>
            <Link to="/clientes/agregar" className="btn btn-primary">
            Agregar Cliente
            </Link>
            <table className="table">
                <thead>
                    <th>ID CLIENTE</th>
                    <th>NOMBRES</th>
                    <th>APELLIDOS</th>
                    <th>DIRECCION</th>
                    <th>TELEFONO</th>
                    <th>EMAIL</th>
                    <th>OPCIONES</th>
                </thead>
                <tbody>
                    {clientes.map((cliente) => (
                        <tr>
                            <td>{cliente.cliente_id}</td>
                            <td>{cliente.nombre}</td>
                            <td>{cliente.apellido}</td>
                            <td>{cliente.direccion}</td>
                            <td>{cliente.telefono}</td>
                            <td>{cliente.email}</td>
                            <td>
                            <Link to={`/clientes/actualizar/${cliente.cliente_id}`} className="btn btn-outline-info">Editar</Link>
                            <Link to={`/clientes/eliminar/${cliente.cliente_id}`} className="btn btn-outline-danger">Eliminar</Link>
                        </td>
                        </tr>))}
                </tbody>
            </table>
        </div>
    );
}
export default ListaClientes;