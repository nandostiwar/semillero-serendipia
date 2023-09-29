import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getMeseroCorreo } from '../API/RestauranteApi';
import './styles/Login.css';

export default function Login() {
  const navigate = useNavigate();
  const [Usercorreo, setUserCorreo] = useState('');
  const [Userclave, setUserClave] = useState('');

  const Loggin = async() =>{
    const BusMesero = await getMeseroCorreo(Usercorreo); 
    const Mesero = BusMesero[0];
    if(Mesero.correo === Usercorreo && Mesero.clave === Userclave){
      navigate(`/Mesero/${Mesero.id}`)
    }else{
      alert("Usuario o Clave incorrectos");
    }
  }

  return (
    <div>
      <form className="formLogin" onSubmit={ev=>{
          ev.preventDefault();
          Loggin();
        }
      }>
        <div className="circle">
          <i className="fas fa-user"></i>
        </div>
        <h2 className="Linealh2"> Iniciar Sesión </h2>
        <div className="user-box">
          <input className='Usercorreo' required type='text' onChange={ev => setUserCorreo(ev.target.value) } />
          <label htmlFor='Usercorreo'>  Usuario </label>
        </div>

        <div className='user-box'>
          <input className='Userclave' required type='password' onChange={ev => setUserClave(ev.target.value)} />
          <label htmlFor='Userclave' > Contraseña </label>
        </div>
        <div className="botonCen">
          <button className="btnFormularios"> Iniciar Sesión </button>
        </div>
      </form>
    </div>
  )
}
