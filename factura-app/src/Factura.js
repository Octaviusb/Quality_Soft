import React, { useState } from 'react';
import './Factura.css';
import logo from './logo1.jpg'; 

const Factura = () => {
    // Declarar el estado para los menús desplegables
    const [showDebito, setShowDebito] = useState(false);
    const [showCredito, setShowCredito] = useState(false);

    return (
        <div style={{ display: 'flex', margin: 0 }}>
            <div className="sidebar">
                <div className="logo-container">
                    <img src={logo} alt="Logo de la empresa" className="logo" />
                </div>
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

                <div className="form-container">
                    <h3>Factura de Venta</h3>
                    <table className="factura-table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Quality Soft Service SAS</th>
                                <th>Consecutivo No. 2</th>
                                <th>Consecutivo Electrónico No. 2</th>
                                <th>Consecutivo Electrónico de Contingencia No. 1</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Desea copiar una factura existente*</td>
                                <td>No</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Cliente*</td>
                                <td>Seleccione una opción</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Fecha</td>
                                <td>27/09/2024</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Tipo de Negociación</td>
                                <td>Seleccione una opción</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Vencimiento</td>
                                <td>27/09/2024</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Acta*</td>
                                <td>Acta</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Contrato*</td>
                                <td>Seleccione una opción</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Descripción del Contrato</td>
                                <td>Descripción Contrato</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>

                    <form action="procesar_factura.php" method="post">
                        <button type="submit">Generar Factura</button>
                    </form>

                    <div className="table-container">
                        <table>
                            <thead>
                                <tr>
                                    <th>Producto</th>
                                    <th>Cantidad</th>
                                    <th>Precio</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Ejemplo Producto</td>
                                    <td>1</td>
                                    <td>$100</td>
                                    <td>$100</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Factura;