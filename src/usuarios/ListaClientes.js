import React , {useEffect,useState} from "react";
import axios from "axios";
function ListaClientes(){
    const [cliente, setCliente] = useState([]);

    useEffect(() => {
        const fethCliente = async () => {
            try{
                const response = await axios.get('http://localhost:3000/api/cliente');
                setCliente(response.data);
              }catch(error) {
                console.log(error);
            }
        };
        fethCliente();

    },[]);
    return (
        <div className="container">
            <h2>Lista de Clientes</h2>
            <table className="table">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Telefono</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                  {cliente.map((cliente) => (
                      <tr key={cliente.id}>
                          <td>{cliente.id}</td>
                          <td>{cliente.nombre}</td>
                          <td>{cliente.apellido}</td>
                          <td>{cliente.telefono}</td>
                          <td>{cliente.email}</td>
                      </tr>))}
              </tbody>
            </table>
        </div>
    );
  }
export default ListaClientes;