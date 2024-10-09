import React, { useState } from 'react';
import './RegistroPersonal.css'; // Asegúrate de crear este archivo CSS o adaptar el existente
import logo from './logo1.jpg';

const RegistroPersonal = () => {
    // Declara el estado para los menús desplegables
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

                {/* Título y Botones de acción */}
                <h1>Registro de Personal</h1>
                <div className="action-buttons">
                    <button>Copiar</button>
                    <button>CSV</button>
                    <button>Excel</button>
                    <button>PDF</button>
                    <button>Print</button>
                    <input type="text" placeholder="Search:___" className="search-input" />
                </div>

                {/* Tabla con campos editables */}
                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Código</th>
                                <th>Nombre</th>
                                <th>Tipo de Documento</th>
                                <th>Documento</th>
                                <th>DV</th>
                                <th>Tipo de Organización</th>
                                <th>Correo</th>
                                <th>Notificaciones</th>
                                <th>Dirección</th>
                                <th>Acciones</th>
                                <th>Certificado Retención</th>
                                <th>Documentos Legales</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[...Array(6)].map((_, i) => (
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
                                    <td>
                                        <button>Editar</button>
                                        <button>Eliminar</button>
                                    </td>
                                    <td>
                                        <button>Generar</button>
                                    </td>
                                    <td>
                                        <button>Adjuntar</button>
                                        <button>Ver</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Botones de navegación */}
                <div className="navigation-buttons">
                    <button>Atrás</button>
                    <button>Siguiente</button>
                </div>
            </div>
        </div>
    );
};

export default RegistroPersonal;
