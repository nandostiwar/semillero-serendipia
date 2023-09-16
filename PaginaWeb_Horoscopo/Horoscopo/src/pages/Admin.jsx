/*Vamos a usar esto para crear al administrador y también vamos a exportar
las variables correo y contraseña*/
import { Usuarios } from "./Registro";

export const Correo = 'administrador@hotmail.com';
export const Clave = 'adminPage';

export default function Admin(){
    return(
        <div>
            <h1>Usuarios Registrados</h1>
            {Usuarios.map(usuarios =>
                <div key={usuarios.id}>
                    <h2> {usuarios.nombre} </h2>
                </div>   
            )}
        </div>
    );
}