import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import carImage from "../../src/img/car-image.jpg";
import SeleccionarVehiculo from "../vehiculos/SeleccionarVehiculo";

function Home() {
    return (
      <div className="container py-4">
        <h1>Bienvenido a la App de Arriendo de Vehículos</h1>
        <h3 className="text-md-end">Modo Reserva de Vehículos</h3>
  
        <div className="row align-items-center">
          <div className="col-md-4">
            <img src={carImage} alt="Car" className="img-fluid" />
          </div>
  
          <div className="col-md-8">
            <form className="mb-3">
              <div className="row">
                <div className="col-md-6 mb-2">
                  <label htmlFor="fecha_inicio">Fecha de inicio:</label>
                  <input type="date" className="form-control" id="fecha_inicio" name="fecha_inicio" />
                </div>
                <div className="col-md-6 mb-2">
                  <label htmlFor="fecha_fin">Fecha de fin:</label>
                  <input type="date" className="form-control" id="fecha_fin" name="fecha_fin" />
                </div>
              </div>
  
              <SeleccionarVehiculo/>
  
              <button type="submit" className="btn btn-primary">Reservar</button>
            </form>
  
            <div className="text-md-end">
              <Link to="/vehiculos" className="btn btn-secondary">Ver todos los vehículos</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Home;