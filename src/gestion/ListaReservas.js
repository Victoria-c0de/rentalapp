import React , {useEffect,useState} from "react";
import axios from "axios";
function ListaReservas(){
    const [reservas, setReserva] = useState([]);    
    useEffect(() => {
      obtenerReservas();
    }, []);
  
    const obtenerReservas = async () => {
      try {
        const query = `SELECT r.reserva_id as id, c.cliente_id, CONCAT(c.nombre, ' ', c.apellido) as cliente,
          v.vehiculo_id, v.marca, v.modelo, v.anio, v.precio_por_dia, r.fecha_inicio, r.fecha_fin, r.total_pago
          FROM reserva r, cliente c, vehiculo v
          WHERE 
          r.cliente_id = c.cliente_id and
          r.vehiculo_id = v.vehiculo_id`;

        const response = await axios.post('http://localhost:3000/api/dynamic', {
          query
        });
  
        setReserva(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    return (
        <div className="container">
            <h2>Lista de Reservas</h2>
            <table className="table">
              <thead>
                <tr>
                  <th>FECHA DE INICIO</th>
                  <th>FECHA FINAL</th>
                  <th>TOTAL A PAGAR</th>
                </tr>
              </thead>
              <tbody>
                  {reservas.map((reserva) => (
                      <tr key={reserva.id}>
                          <td>{reserva.cliente_id}</td>
                          <td>{reserva.vehiculo_id}</td>
                          <td>{reserva.fecha_inicio}</td>
                          <td>{reserva.fecha_fin}</td>
                          <td>{reserva.total_pago}</td>
                      </tr>))}
              </tbody>
            </table>
        </div>
    );
  }
export default ListaReservas;