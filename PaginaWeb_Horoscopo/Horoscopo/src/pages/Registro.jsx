import { buscarUsuarios } from "./Funciones.";

export const Usuarios = []

export function registroUsuario(nombre, correo, clave) {
    Usuarios.push([nombre, correo, clave]);
    for (var i = 0; i < Usuarios.length; i++) {
        for (var j = 0; j < Usuarios[0].length; j++) {
            console.log(Usuarios[i][j])
        }
    }
    buscarUsuarios(correo);
}

export default function Registro() {
    return (
        <div> 
        </div>
    )
}