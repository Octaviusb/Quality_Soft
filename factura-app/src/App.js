import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Factura from './Factura';
import FacturaElectronica from './FacturaElectronica';
import RegistroPersonal from './RegistroPersonal';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* Ruta para la primera página */}
          <Route path="/" element={<Factura />} />
          {/* Ruta para la segunda página */}
          <Route path="/factura-electronica" element={<FacturaElectronica />} />
          {/* Ruta para RegistroPersonal */}
          <Route path="/registro-personal" element={<RegistroPersonal />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
