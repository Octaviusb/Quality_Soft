import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Asegúrate de importar Link
import './Factura.css';
import logo from './logo3.jpg'; 

const Factura = () => {
    // Declara el estado para los menús desplegables
    const [showDebito, setShowDebito] = useState(false);
    const [showCredito, setShowCredito] = useState(false);

    // Barra lateral
    return (
        <div style={{ display: 'flex', margin: 0 }}>
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

            {/* Header con barra horizontal */}
            <div className="main-content">
                <header className="navbar">
                    <img src={logo} alt="Logo Empresa" className="logo" />
                    <h2 className="company-name">Quality Soft Service SAS</h2>
                </header>

                {/* formulario de la factura*/}
                <div className="form-container">
                    <h3>Factura de Venta</h3>
                    <table className="factura-table">
                        <thead>
                            <tr>
                                <th></th>
                                <th colSpan="2">Factura de Venta</th> {/* Cambiado a colSpan */}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td>Quality Soft Service SAS</td>
                                <td>Consecutivo No. 2</td>
                                <td>Consecutivo Electrónico No. 2</td>
                                <td>Consecutivo Electrónico de Contingencia No. 1</td>
                            </tr>
                            <tr>
                                <td>¿Desea copiar una factura existente*?</td>
                                <td colSpan="2">
                                    <select required>
                                        <option value="">No</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>Cliente*</td>
                                <td colSpan="2">
                                    <select required>
                                        <option value="">Seleccione una opción</option>
                                        <option value="cliente1">Cliente 1</option>
                                        <option value="cliente2">Cliente 2</option>
                                        <option value="cliente3">Cliente 3</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>Fecha*</td>
                                <td colSpan="2">
                                    <input type="date" value="2024-09-27" required />
                                </td>
                            </tr>
                            <tr>
                                <td>Tipo de Negociación*</td>
                                <td colSpan="2">
                                    <select required>
                                        <option value="">Seleccione una opción</option>
                                        <option value="negociacion1">Negociación 1</option>
                                        <option value="negociacion2">Negociación 2</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>Vencimiento*</td>
                                <td colSpan="2">
                                    <input type="date" value="2024-09-27" required />
                                </td>
                            </tr>
                            <tr>
                                <td>Acta*</td>
                                <td>
                                    <input type="text" value="Acta" required />
                                </td>
                                <td>Contrato*</td>
                                <td>
                                    <select required>
                                        <option value="">Seleccione una opción</option>
                                    </select>
                                </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Descripción del Contrato*</td>
                                <td colSpan="2">
                                    <input type="text" value="Descripción Contrato" required />
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    {/* Botón para ir a la segunda página */}
                    <Link to="/factura-electronica">
                        <button>Ir a Facturas Electrónicas</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Factura;
