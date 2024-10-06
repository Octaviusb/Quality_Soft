import React, { useState } from 'react';
import './FacturaElectronica.css';
import { Link } from 'react-router-dom'; // Importar Link de react-router-dom
import RegistroPersonal from './RegistroPersonal'; 
import logo from './logo1.jpg';

const FacturaElectronica = () => {
    const [showDebito, setShowDebito] = useState(false);
    const [showCredito, setShowCredito] = useState(false);

    return (
        <div style={{ display: 'flex', margin: 0 }}>
            {/* Barra lateral */}
            <div className="sidebar">
                <h2>Menú</h2>
                <a href="#">Facturación</a>
                <a href="#">Lista de Facturas</a>
                <div>
                    <a href="#" onClick={() => setShowDebito(!showDebito)}>
                        <strong>NOTAS DEBITO</strong>
                    </a>
                    {showDebito && (
                        <div className="dropdown">
                            <a href="#">Nota Débito 1</a>
                            <a href="#">Nota Débito 2</a>
                        </div>
                    )}
                </div>
                <div>
                    <a href="#" onClick={() => setShowCredito(!showCredito)}>
                        <strong>NOTAS CREDITO</strong>
                    </a>
                    {showCredito && (
                        <div className="dropdown">
                            <a href="#">Nota Crédito 1</a>
                            <a href="#">Nota Crédito 2</a>
                        </div>
                    )}
                </div>
                <a href="#"><strong>COMPRAS</strong></a>
                <a href="#">Lista de Compras</a>
                <a href="#"><strong>CONTRATOS</strong></a>
                <a href="#"><strong>ITEMS COMPRAS</strong></a>
                <a href="#"><strong>CLIENTES</strong></a>
                <a href="#">Lista de Clientes</a>
                <a href="#"><strong>PROVEEDORES</strong></a>
                <a href="#">Lista de Proveedores</a>
                <a href="#"><strong>CALENDARIO TRIBUTARIO</strong></a>
                <a href="#">Calendario Tributario</a>
                <a href="#"><strong>MODULO ADMINISTRATIVO</strong></a>
                <a href="#"><strong>PRESUPUESTO</strong></a>
            </div>

            {/* Contenido principal */}
            <div className="main-content">
                {/* Header */}
                <header className="navbar">
                    <img src={logo} alt="Logo Empresa" className="logo" />
                    <h2 className="company-name">Quality Soft Service SAS</h2>
                </header>

                {/* Encabezado de la Aplicación */}
                <header>
                    <h1>Aplicación de Facturación</h1>
                </header>

                {/* Botones */}
                <h3>Facturas Electrónicas QUALITY SOFT SERVICE SAS</h3>
                <div className="buttons-container">
                    <button>Copiar</button>
                    <button>CSV</button>
                    <button>Excel</button>
                    <button>PDF</button>
                    <button>Print</button>
                    <button>Visibilidad</button>
                </div>

                {/* Tabla con campos editables */}
                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Consecutivo</th>
                                <th>Nota</th>
                                <th>Contrato</th>
                                <th>Fecha</th>
                                <th>IVA</th>
                                <th>Retefuente</th>
                                <th>Retegarantía</th>
                                <th>Retegarantía Pagada</th>
                                <th>Reteica</th>
                                <th>Anulada</th>
                                <th>Factura</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[...Array(12)].map((_, i) => (
                                <tr key={i}>
                                    {/* Celdas editables */}
                                    <td contentEditable="true" suppressContentEditableWarning={true}></td>
                                    <td contentEditable="true" suppressContentEditableWarning={true}></td>
                                    <td contentEditable="true" suppressContentEditableWarning={true}></td>
                                    <td contentEditable="true" suppressContentEditableWarning={true}></td>
                                    <td contentEditable="true" suppressContentEditableWarning={true}></td>
                                    <td contentEditable="true" suppressContentEditableWarning={true}></td>
                                    <td contentEditable="true" suppressContentEditableWarning={true}></td>
                                    <td contentEditable="true" suppressContentEditableWarning={true}></td>
                                    <td contentEditable="true" suppressContentEditableWarning={true}></td>
                                    <td contentEditable="true" suppressContentEditableWarning={true}></td>
                                    <td>
                                        <button>Factura {i + 1}</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Botón para ir a RegistroPersonal */}
                    <Link to="/registro-personal">
                        <button>Registro de Personal</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FacturaElectronica;
