import { Link } from 'react-router-dom';
import './Tabla.css';
import { useState } from 'react';


export default function Tabla({Titulo, Th1, Th2, Th3, TextoBoton, Mesas}) {
    return (
        <>
        <div>
            <div className="tabla-container">
                <table className="tabla-form">
                    <thead>
                        <tr>
                            <th className="ttlo-form" colSpan="3"> {Titulo} </th>
                        </tr>
                        <tr className="espacio-row">
                            <td>&nbsp;</td>
                        </tr>
                        <tr className="dps-ttlo">
                            <th> {Th1} </th>
                            <th> {Th2} </th>
                            <th> {Th3} </th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* El Mesas.filter((mesa)=>mesa.MeseroId === IdMesero) se hace para que
                        traiga solo las mesas que tiene el mesero, haciendo una relacion entre estos dos datos, Mesa y Mesero*/}
                        {Mesas.map(mesas => (
                            <tr key={mesas.MesaId}>
                                <td> {mesas.MesaId} </td>
                                <td> {mesas.CantidadClientes} </td>
                                <td> <input type='checkbox' defaultChecked={ mesas.CantidadClientes>0} disabled/> </td>
                            </tr>
                        ) )}
                    </tbody>
                </table>
            </div>
            <div className='container-btn'>
                <Link to="/Pedido">
                    <button className="btnFormularios"> {TextoBoton} </button>
                </Link>
                
            </div>
        </div>
        </>
    )
}
