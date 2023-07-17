import React from "react";

function TopBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ backgroundColor: "#1fc8db" }}>
      <div className="container">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"data-bs-target="#navbarNav"aria-controls="navbarNav"aria-expanded="false"aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">RENTAL APP</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/vehiculos">Vehículos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/clientes">Clientes</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/reservas">Reservas</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contacto">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default TopBar;
