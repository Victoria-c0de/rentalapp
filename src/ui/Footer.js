import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function Footer() {
    return (
      <footer className="bg-dark py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h4>Información de contacto</h4>
              <p>Dirección: Calle Madrid, Ciudad Peter Pan</p>
              <p>Teléfono: +1234567890</p>
              <p>Email: info@rentalapp.com</p>
            </div>
            <div className="col-md-4">
              <h4>Enlaces útiles</h4>
              <ul className="list-unstyled">
                <li><a href="/">Inicio</a></li>
                <li><a href="/vehiculos">Vehículos</a></li>
                <li><a href="/reservas">Reservas</a></li>
                <li><a href="/contacto">Contacto</a></li>
              </ul>
            </div>
            <div className="col-md-4">
              <h4>Síguenos en redes sociales</h4>
              <ul className="list-unstyled">
                <li><a href="https://www.facebook.com/rentalapp">Facebook</a></li>
                <li><a href="https://www.instagram.com/rentalapp">Instagram</a></li>
                <li><a href="https://www.twitter.com/rentalapp">Twitter</a></li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <p>&copy; {new Date().getFullYear()} Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;