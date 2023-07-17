import React from 'react';
import CarList from './CarList'; // Importa el componente CarList

function SeleccionarVehiculo() {
  return (
    <div className="form-group">
      <label htmlFor="vehiculo">Vehículo:</label>
      <select className="form-control" id="vehiculo" name="vehiculo">
        <option value="">Selecciona un vehículo</option>
        {/* Renderiza la lista de vehículos dinámicamente */}
        <CarList />
      </select>
    </div>
  );
}

export default SeleccionarVehiculo;
