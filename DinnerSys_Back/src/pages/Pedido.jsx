import { useState } from 'react';
import './styles/Pedido.css';

export default function Pedido() {

  const [Mesa] = useState(localStorage.getItem("Mesa"));
  const [NMesa, setNMesa] = useState(Mesa ? (JSON.parse(Mesa).id) : null);

  console.log(NMesa);

  return (
    <>
      {Mesa ?
        <div className='container-formulariosPP'>
          <form className='formPedidos'>
            <h2 className='Linealh2'>Tomar Pedido MesaN°{NMesa} </h2>
            <div className="user-box">
              <input required type='text' />
              <label> Nombre Cliente </label>
            </div>
            <div className="user-box">
              <input required type='number' min="1" max="20" />
              <label> Cantidad Clientes </label>
            </div>
          </form>

          <form className="formlstProductos">
            <div className="carrusel-pedidos">
              <label htmlFor='producto1' > Producto1 - precio  </label>
              <input id='producto1' type='checkbox' />
              <br />
              <label htmlFor='producto2' > Producto2 </label>
              <input id='producto2' type='checkbox' />
              <br />
              <label htmlFor='producto3' > Producto3 </label>
              <input id='producto3' type='checkbox' />
            </div>
          </form>

        </div>

        :

        <form className='formSinMesa'>
          <h2>NO HAY NINGUNA MESA SELECCIONADA</h2>
        </form>
      }
    </>
  )
}
