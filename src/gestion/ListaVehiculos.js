import React , {useEffect,useState} from "react";
import axios from "axios";
function ListaVehiculos(){
    const [vehiculos,setVehiculos] = useState([]);

    useEffect(() => {
        obtenerVehiculos();
    }, []);
    
    const obtenerVehiculos = async () => {
        try {
        const query = `SELECT vehiculo.*, imagenes.ruta
        FROM vehiculo
        LEFT JOIN imagenes ON vehiculo.vehiculo_id = imagenes.vehiculo_id`;
    
        const response = await axios.post('http://localhost:3000/api/dynamic', {
            query
        });

        setVehiculos(response.data);
        } catch (error) {
        console.log(error);
        }
    };

    return (
        <div className="container">
            <h2>Lista de vehiculos</h2>
            <table className="table">
                <thead>
                <tr>
                    <th>ID</th>   
                    <th>MARCA</th>
                    <th>MODELO</th>
                    <th>AÑO</th>
                    <th>PRECIO POR DIA</th>
                    <th>OPCIONES</th>
                </tr>
                </thead>
                <tbody>
                    {vehiculos.map((vehiculo) => (
                        <tr key={vehiculo.id}>
                        <td><img src={vehiculo.ruta} alt={vehiculo.marca} /></td>
                        <td>{vehiculo.marca}</td>
                        <td>{vehiculo.modelo}</td>
                        <td>{vehiculo.anio}</td>
                        <td>{vehiculo.precio_por_dia}</td>
                        <td>{vehiculo.imagenVehiculo}</td>
                        </tr>))}
            </tbody>
        </table>
    </div>
);
}
export default ListaVehiculos;