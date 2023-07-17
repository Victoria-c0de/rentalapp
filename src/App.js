import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ListaClientes from './clientes/ListaClientes';
import ListaUsuarios from './usuarios/ListaClientes';
import CrearCliente from './clientes/CrearCliente';
import TopBar from './ui/TopBar';
import Footer from './ui/Footer';
import Home from './ui/Home';
import ActualizarCliente from './clientes/ActualizarCliente';
import ActualizarVehiculo from './vehiculos/ActualizarVehiculo';
import CrearVehiculo from './vehiculos/CrearVehiculo';
import EliminarVehiculo from './vehiculos/EliminarVehiculo';
import EliminarCliente from './clientes/EliminarCliente';
import ListaVehiculos from './vehiculos/ListaVehiculos';
import ListaReservas from './reservas/ListaReservas';
import CrearReserva from './reservas/CrearReserva';
import ActualizarReserva from './reservas/ActualizarReserva';
import EliminarReserva from './reservas/EliminarReserva';

function App() {
  return (
    <Router>
      <div>
        <TopBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vehiculos" element={<ListaVehiculos />} />
          <Route path="/vehiculos/agregar" element={<CrearVehiculo />} />
          <Route path="/vehiculos/actualizar/:id" element={<ActualizarVehiculo />} />
          <Route path="/vehiculos/eliminar/:id" element={<EliminarVehiculo />} />
          <Route path="/usuarios" element={<ListaUsuarios />} />
          <Route path="/clientes" element={<ListaClientes />} />
          <Route path="/clientes/agregar" element={<CrearCliente />} />
          <Route path="/clientes/actualizar/:id" element={<ActualizarCliente />} />
          <Route path="/clientes/eliminar/:id" element={<EliminarCliente />} />
          <Route path="/reservas" element={<ListaReservas />} />
          <Route path="/reservas/agregar" element={<CrearReserva />} />
          <Route path="/reservas/actualizar/:id" element={<ActualizarReserva />} />
          <Route path="/reservas/eliminar/:id" element={<EliminarReserva />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
