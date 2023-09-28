import './styles/Login.css';

export default function Login() {
  return (
    
    <div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"/>
      <form className="formLogin">
        <div className="circle">
          <i className="fas fa-user"></i>
        </div>
        <h2 className="Linealh2"> Iniciar Sesión </h2>
        <div className="user-box">
          <input className='correo' required type='text' />
          <label htmlFor='correo'>  Usuario </label>
        </div>

        <div className='user-box'>
          <input className='clave' required type='password' />
          <label htmlFor='clave' > Contraseña </label>
        </div>
        <div className="botonCen">
          <button>hola</button>
        </div>
      </form>
    </div>
  )
}
