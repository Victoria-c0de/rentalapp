import React , {useEffect,useState} from "react";
import axios from "axios";
function ListaVehiculos(){
    const [gestionVehiculos,setGestionV] = useState([]);

    useEffect(() => {
        obtenerVehiculos();
    }, []);
    
    const obtenerVehiculos = async () => {
        try {
            const query = `SELECT r.reserva_id, v.marca, v.precio_por_dia, r.fecha_inicio, r.fecha_fin, CONCAT(c.nombre, ' ', c.apellido) AS nombre_cliente, v.disponibilidad, i.ruta AS ruta_imagen
            FROM reserva r
            INNER JOIN vehiculo v ON r.vehiculo_id = v.vehiculo_id
            INNER JOIN cliente c ON r.cliente_id = c.cliente_id
            LEFT JOIN imagenes i ON v.vehiculo_id = i.vehiculo_id`;
            
        const response = await axios.post('http://localhost:3000/dynamic', {
            query
        });

        setGestionV(response.data);
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
                    <th>IMAGEN</th>
                    <th>AÑO</th>
                    <th>PRECIO POR DIA</th>
                    <th>DISPONIBILIDAD</th>
                    <th>OPCIONES</th>
                </tr>
                </thead>
                <tbody>
                    {gestionVehiculos.map((vehiculo) => (
                        <tr key={vehiculo.id}>
                        <td>{vehiculo.id}</td>
                        <td><img src={vehiculo.ruta} alt={vehiculo.marca} /></td>
                        <td>{vehiculo.marca}</td>
                        <td>{vehiculo.modelo}</td>
                        <td>{vehiculo.anio}</td>
                        <td>{vehiculo.precio_por_dia}</td>
                        <td>{vehiculo.disponibilidad}</td>
                        </tr>))}
            </tbody>
        </table>
    </div>
);
}
export default ListaVehiculos;