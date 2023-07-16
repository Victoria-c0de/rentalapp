import React , {useEffect,useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

function ListaClientes(){
    const [clientes,setClientes] = useState([]);

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
    return (
        <div className="container">
            <h1>Lista de clientes</h1>
            <hr></hr>
            <a href="/clientes/agregar" className="btn btn-primary">Agregar Cliente</a>
            <table className="table">
                <thead>
                    <th>ID CLIENTE</th>
                    <th>NOMBRES</th>
                    <th>APELLIDOS</th>
                    <th>EMAIL</th>
                    <th>TELEFONO</th>
                    <th>OPCIONES</th>
                </thead>
                <tbody>
                    {clientes.map((cliente) => (
                        <tr>
                            <td>{cliente.id_cliente}</td>
                            <td>{cliente.nombre}</td>
                            <td>{cliente.apellido}</td>
                            <td>{cliente.email}</td>
                            <td>{cliente.telefono}</td>
                            <td>
                            <Link to={`/clientes/actualizar/${cliente.id_cliente}`} className="btn btn-warning">Editar</Link>
                            <Link to={`/clientes/eliminar/${cliente.id_cliente}`} className="btn btn-danger">Eliminar</Link>
                        </td>
                        </tr>))}
                </tbody>
            </table>
        </div>
    );
}
export default ListaClientes;