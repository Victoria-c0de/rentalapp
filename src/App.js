import { BrowserRouter as Router,Route,Routes  } from 'react-router-dom';
import './App.css';
import ListaClientes from './clientes/ListaClientes';
import ListaUsuarios from './usuarios/ListaClientes';
import CrearCliente from './clientes/CrearCliente';
import TopBar from './ui/TopBar';
import Footer from './ui/Footer';
import Home from './ui/Home';
import ActualizarCliente from './clientes/ActualizarCliente';
import EliminarCliente from './clientes/EliminarCliente';
import ListaReservas from './gestion/ListaReservas';

function App() {
  return (
    <Router>
      <div>
      <TopBar/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/vehiculos" element={<ListaUsuarios/>}/>
          <Route path="/usuarios" element={<ListaUsuarios/>}/>
          <Route path="/clientes" element={<ListaClientes/>}/>
          <Route path="/clientes/agregar" element={<CrearCliente/>}/>
          <Route path="/clientes/actualizar/:id" element={<ActualizarCliente/>}/>
          <Route path="/clientes/eliminar/:id" element={<EliminarCliente/>}/>
          <Route path="/reservas" element={<ListaReservas/>}/>
        </Routes>
      <Footer/>
      </div>
    </Router>
  );
}

export default App;
